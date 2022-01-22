import { BigInt, store } from "@graphprotocol/graph-ts"
import {
    NFTMarket,
    AuctionCancelled,
    AuctionCreated,
    BidCreated,
    SaleCreated,
    SellCancelled,
    SaleEnded,
    AuctionEnded
} from "../generated/NFTMarket/NFTMarket"

import {
    NFT,
    TokenMinted,
    Transfer
} from "../generated/NFT/NFT"

import { User,History,Token,Sale,Bid,Auction } from "../generated/schema"


export function handleTokenMinted(event: TokenMinted): void {
    let user = User.load(event.params.owner.toHexString())

    if (!user) {
        user = new User(event.params.owner.toHexString())
        user.save()
    }

    let NFTcontract = NFT.bind(event.address)
    
    let token = new Token(event.params.tokenId.toString())
    token.minter = event.params.owner.toHexString()
    token.owner = event.params.owner.toHexString()
    token.tokenId = event.params.tokenId
    token.tokenURI = NFTcontract.tokenURI(event.params.tokenId)
    token.metaURI = NFTcontract.getMetaDataURI(event.params.tokenId)
    token.royaltyPercentage = NFTcontract.getRoyaltyPercentage(event.params.tokenId)
    token.createdAtTimestamp = event.block.timestamp
    
    token.save()

    let history = new History(event.params.tokenId.toString() + event.block.timestamp.toString())
    history.token = event.params.tokenId.toString()
    history.owner = event.params.owner.toHexString()
    history.price = BigInt.fromU32(0)
    history.createdAtTimestamp = event.block.timestamp
    history.save()
}

export function handleSaleCreated(event: SaleCreated): void {
    let sale = new Sale(event.params.tokenId.toString())
    sale.sellingPrice = event.params.sellingPrice
    sale.token = event.params.tokenId.toString()
    sale.seller = event.params.seller.toHexString()
    sale.createdAtTimestamp = event.block.timestamp
    sale.save()
}

export function handleSellCancelled(event: SellCancelled): void {
    store.remove("Sale", event.params.tokenId.toString())
}

export function handleAuctionCreated(event: AuctionCreated): void {
    let auction = new Auction(event.params.tokenId.toString())
    auction.startingPrice = event.params.startingPrice
    auction.token = event.params.tokenId.toString()
    auction.seller = event.params.seller.toHexString()
    auction.expiresAt = event.params.expiresAt
    auction.createdAtTimestamp = event.block.timestamp
    auction.save()
}

export function handleAuctionCancelled(event: AuctionCancelled): void {
    store.remove("Auction", event.params.tokenId.toString())
}

export function handleBidCreated(event: BidCreated): void {
    let bid = new Bid(event.params.tokenId.toString() + event.block.timestamp.toString())
    bid.bidder = event.params.bidder.toHexString()
    bid.bidPrice = event.params.bidAmount
    bid.auction = event.params.tokenId.toString()
    bid.createdAtTimestamp = event.block.timestamp
    bid.save()

    let auction = Auction.load(event.params.tokenId.toString())
    if(!auction){
        let MarketContract = NFTMarket.bind(event.address)
        const response = MarketContract.TokenAuctions(event.params.tokenId)
        auction = new Auction(event.params.tokenId.toString())
        auction.startingPrice = response.value2
        auction.token = event.params.tokenId.toString()
        auction.seller = response.value1.toHexString()
        auction.expiresAt = response.value3
        auction.createdAtTimestamp = event.block.timestamp
        
    }
    auction.currentBid = event.params.tokenId.toString() + event.block.timestamp.toString()
    auction.save()
}

export function handleSaleEnded(event: SaleEnded): void {
    let user = User.load(event.params.to.toHexString())
    if(!user){
        user = new User(event.params.to.toHexString())
        user.save()
    }

    let token = Token.load(event.params.tokenId.toString())
    if(!token){
        let NFTcontract = NFT.bind(event.address)

        token = new Token(event.params.tokenId.toString())
        token.tokenId = event.params.tokenId
        token.minter = NFTcontract.getOriginalMinter(event.params.tokenId).toHexString()
        //token.owner = NFTcontract.ownerOf(event.params.tokenId).toHexString()
        token.tokenURI = NFTcontract.tokenURI(event.params.tokenId)
        token.metaURI = NFTcontract.getMetaDataURI(event.params.tokenId)
        token.royaltyPercentage = NFTcontract.getRoyaltyPercentage(event.params.tokenId)
        token.createdAtTimestamp = event.block.timestamp
    }
    token.owner = event.params.to.toHexString()
    token.save()

    let history = new History(event.params.tokenId.toString() + event.block.timestamp.toString())
    history.token = event.params.tokenId.toString()
    history.owner = event.params.to.toHexString()
    history.price = event.params.price
    history.createdAtTimestamp = event.block.timestamp
    history.save()

    // Removing Sale for this token
    store.remove("Sale", event.params.tokenId.toString())
}

export function handleAuctionEnded(event: AuctionEnded): void {
    let user = User.load(event.params.to.toHexString())
    if(!user){
        user = new User(event.params.to.toHexString())
        user.save()
    }

    let token = Token.load(event.params.tokenId.toString())
    if(!token){
        let NFTcontract = NFT.bind(event.address)

        token = new Token(event.params.tokenId.toString())
        token.tokenId = event.params.tokenId
        token.minter = NFTcontract.getOriginalMinter(event.params.tokenId).toHexString()
        //token.owner = NFTcontract.ownerOf(event.params.tokenId).toHexString()
        token.tokenURI = NFTcontract.tokenURI(event.params.tokenId)
        token.metaURI = NFTcontract.getMetaDataURI(event.params.tokenId)
        token.royaltyPercentage = NFTcontract.getRoyaltyPercentage(event.params.tokenId)
        token.createdAtTimestamp = event.block.timestamp
    }
    token.owner = event.params.to.toHexString()
    token.save()

    let history = new History(event.params.tokenId.toString() + event.block.timestamp.toString())
    history.token = event.params.tokenId.toString()
    history.owner = event.params.to.toHexString()
    history.price = event.params.price
    history.createdAtTimestamp = event.block.timestamp
    history.save()

    // Removing Auction for this token
    store.remove("Auction", event.params.tokenId.toString())
}
