import { BigInt, store } from "@graphprotocol/graph-ts"
import {
    NFTMarket,
    AuctionCancelled,
    AuctionCreated,
    BidCreated,
    SaleCreated,
    SellCancelled
} from "../generated/NFTMarket/NFTMarket"

import {
    NFT,
    TokenMinted,
    Transfer
} from "../generated/NFT/NFT"

import { User,History,Token,Sale,Bid,Auction } from "../generated/schema"


export function handleTokenMinted(event: TokenMinted): void {
    let user = User.load(event.params.owner.toHex())

    if (!user) {
        user = new User(event.params.owner.toHex())
    }
    user.save()

    let NFTcontract = NFT.bind(event.address)
    
    let token = new Token(event.params.tokenId.toString())
    token.minter = event.params.owner.toHex()
    token.owner = event.params.owner.toHex()
    token.tokenId = event.params.tokenId
    token.tokenURI = NFTcontract.tokenURI(event.params.tokenId)
    token.metaURI = NFTcontract.getMetaDataURI(event.params.tokenId)
    token.royaltyPercentage = NFTcontract.getRoyaltyPercentage(event.params.tokenId)
    token.createdAtTimestamp = event.block.timestamp
    
    token.save()

    let history = new History(event.params.tokenId.toString() + event.block.timestamp.toString())
    history.token = event.params.tokenId.toString()
    history.owner = event.params.owner.toHex()
    history.price = BigInt.fromU32(0)
    history.createdAtTimestamp = event.block.timestamp
    history.save()
}

export function handleTransfer(event: Transfer): void {
    let userTo = User.load(event.params.to.toHexString())
    if(!userTo){
        userTo = new User(event.params.to.toHexString())
    }

    let token = Token.load(event.params.tokenId.toString())
    if(!token){
        let NFTcontract = NFT.bind(event.address)

        token = new Token(event.params.tokenId.toString())
        token.tokenId = event.params.tokenId
        token.minter = NFTcontract.getOriginalMinter(event.params.tokenId).toHex()
        //token.owner = NFTcontract.ownerOf(event.params.tokenId).toHex()
        token.tokenURI = NFTcontract.tokenURI(event.params.tokenId)
        token.metaURI = NFTcontract.getMetaDataURI(event.params.tokenId)
        token.royaltyPercentage = NFTcontract.getRoyaltyPercentage(event.params.tokenId)
        token.createdAtTimestamp = event.block.timestamp
    }
    token.owner = event.params.to.toHex()
    token.save()

    let history = new History(event.params.tokenId.toString() + event.block.timestamp.toString())
    history.token = event.params.tokenId.toString()
    history.owner = event.params.to.toHex()
    // history.price = ???                                                                          Transfer event needs to be overridden to emit price as well. Or Sale ended and auction ended Events need to be made.
    history.createdAtTimestamp = event.block.timestamp
    history.save()

    // Removing Sale and Auction for this token
    store.remove("Sale", event.params.tokenId.toString())
    store.remove("Auction", event.params.tokenId.toString())
}

export function handleSaleCreated(event: SaleCreated): void {
    let MarketContract = NFTMarket.bind(event.address)

    let sale = new Sale(event.params.tokenId.toString())
    sale.sellingPrice = event.params.sellingPrice
    sale.token = event.params.tokenId.toString()
    sale.seller = MarketContract.TokenSales(event.params.tokenId).value1.toHex()        //This Call to contract can be avoided if seller address is passed in event
    sale.createdAtTimestamp = event.block.timestamp
    sale.save()
}

export function handleSellCancelled(event: SellCancelled): void {
    store.remove("Sale", event.params.tokenId.toString())
}

export function handleAuctionCreated(event: AuctionCreated): void {
    let MarketContract = NFTMarket.bind(event.address)
    const response = MarketContract.TokenAuctions(event.params.tokenId)                 //This Call to contract can be avoided if seller and expiry time address is passed in event

    let auction = new Auction(event.params.tokenId.toString())
    auction.startingPrice = event.params.startingPrice
    auction.token = event.params.tokenId.toString()
    auction.seller = response.value1.toHex()
    auction.expiresAt = response.value3
    auction.createdAtTimestamp = event.block.timestamp
    auction.save()
}

export function handleAuctionCancelled(event: AuctionCancelled): void {
    store.remove("Auction", event.params.tokenId.toString())
}

export function handleBidCreated(event: BidCreated): void {
    let bid = new Bid(event.params.tokenId.toString() + event.block.timestamp.toString())
    bid.bidder = event.params.bidder.toHex()
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
        auction.seller = response.value1.toHex()
        auction.expiresAt = response.value3
        auction.createdAtTimestamp = event.block.timestamp
        
    }
    auction.currentBid = event.params.tokenId.toString() + event.block.timestamp.toString()
    auction.save()
}
