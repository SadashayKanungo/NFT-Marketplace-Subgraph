// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionCancelled extends ethereum.Event {
  get params(): AuctionCancelled__Params {
    return new AuctionCancelled__Params(this);
  }
}

export class AuctionCancelled__Params {
  _event: AuctionCancelled;

  constructor(event: AuctionCancelled) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get startingPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AuctionEnded extends ethereum.Event {
  get params(): AuctionEnded__Params {
    return new AuctionEnded__Params(this);
  }
}

export class AuctionEnded__Params {
  _event: AuctionEnded;

  constructor(event: AuctionEnded) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BidCreated extends ethereum.Event {
  get params(): BidCreated__Params {
    return new BidCreated__Params(this);
  }
}

export class BidCreated__Params {
  _event: BidCreated;

  constructor(event: BidCreated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bidAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SaleCreated extends ethereum.Event {
  get params(): SaleCreated__Params {
    return new SaleCreated__Params(this);
  }
}

export class SaleCreated__Params {
  _event: SaleCreated;

  constructor(event: SaleCreated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sellingPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SaleEnded extends ethereum.Event {
  get params(): SaleEnded__Params {
    return new SaleEnded__Params(this);
  }
}

export class SaleEnded__Params {
  _event: SaleEnded;

  constructor(event: SaleEnded) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SellCancelled extends ethereum.Event {
  get params(): SellCancelled__Params {
    return new SellCancelled__Params(this);
  }
}

export class SellCancelled__Params {
  _event: SellCancelled;

  constructor(event: SellCancelled) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NFTMarket__TokenAuctionsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }
}

export class NFTMarket__TokenSalesResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class NFTMarket extends ethereum.SmartContract {
  static bind(address: Address): NFTMarket {
    return new NFTMarket("NFTMarket", address);
  }

  TokenAuctions(param0: BigInt): NFTMarket__TokenAuctionsResult {
    let result = super.call(
      "TokenAuctions",
      "TokenAuctions(uint256):(uint256,address,uint256,uint256,uint256,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new NFTMarket__TokenAuctionsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBoolean()
    );
  }

  try_TokenAuctions(
    param0: BigInt
  ): ethereum.CallResult<NFTMarket__TokenAuctionsResult> {
    let result = super.tryCall(
      "TokenAuctions",
      "TokenAuctions(uint256):(uint256,address,uint256,uint256,uint256,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTMarket__TokenAuctionsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBoolean()
      )
    );
  }

  TokenSales(param0: BigInt): NFTMarket__TokenSalesResult {
    let result = super.call(
      "TokenSales",
      "TokenSales(uint256):(uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new NFTMarket__TokenSalesResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_TokenSales(
    param0: BigInt
  ): ethereum.CallResult<NFTMarket__TokenSalesResult> {
    let result = super.tryCall(
      "TokenSales",
      "TokenSales(uint256):(uint256,address,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTMarket__TokenSalesResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }

  marketPlaceOwner(): Address {
    let result = super.call(
      "marketPlaceOwner",
      "marketPlaceOwner():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_marketPlaceOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "marketPlaceOwner",
      "marketPlaceOwner():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  minimunBidPer10000(): BigInt {
    let result = super.call(
      "minimunBidPer10000",
      "minimunBidPer10000():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minimunBidPer10000(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minimunBidPer10000",
      "minimunBidPer10000():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BidForAuctionCall extends ethereum.Call {
  get inputs(): BidForAuctionCall__Inputs {
    return new BidForAuctionCall__Inputs(this);
  }

  get outputs(): BidForAuctionCall__Outputs {
    return new BidForAuctionCall__Outputs(this);
  }
}

export class BidForAuctionCall__Inputs {
  _call: BidForAuctionCall;

  constructor(call: BidForAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BidForAuctionCall__Outputs {
  _call: BidForAuctionCall;

  constructor(call: BidForAuctionCall) {
    this._call = call;
  }
}

export class BuyNftCall extends ethereum.Call {
  get inputs(): BuyNftCall__Inputs {
    return new BuyNftCall__Inputs(this);
  }

  get outputs(): BuyNftCall__Outputs {
    return new BuyNftCall__Outputs(this);
  }
}

export class BuyNftCall__Inputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyNftCall__Outputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class CancelSellCall extends ethereum.Call {
  get inputs(): CancelSellCall__Inputs {
    return new CancelSellCall__Inputs(this);
  }

  get outputs(): CancelSellCall__Outputs {
    return new CancelSellCall__Outputs(this);
  }
}

export class CancelSellCall__Inputs {
  _call: CancelSellCall;

  constructor(call: CancelSellCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelSellCall__Outputs {
  _call: CancelSellCall;

  constructor(call: CancelSellCall) {
    this._call = call;
  }
}

export class ClaimNftCall extends ethereum.Call {
  get inputs(): ClaimNftCall__Inputs {
    return new ClaimNftCall__Inputs(this);
  }

  get outputs(): ClaimNftCall__Outputs {
    return new ClaimNftCall__Outputs(this);
  }
}

export class ClaimNftCall__Inputs {
  _call: ClaimNftCall;

  constructor(call: ClaimNftCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimNftCall__Outputs {
  _call: ClaimNftCall;

  constructor(call: ClaimNftCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMarketPlaceOwnerCall extends ethereum.Call {
  get inputs(): SetMarketPlaceOwnerCall__Inputs {
    return new SetMarketPlaceOwnerCall__Inputs(this);
  }

  get outputs(): SetMarketPlaceOwnerCall__Outputs {
    return new SetMarketPlaceOwnerCall__Outputs(this);
  }
}

export class SetMarketPlaceOwnerCall__Inputs {
  _call: SetMarketPlaceOwnerCall;

  constructor(call: SetMarketPlaceOwnerCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMarketPlaceOwnerCall__Outputs {
  _call: SetMarketPlaceOwnerCall;

  constructor(call: SetMarketPlaceOwnerCall) {
    this._call = call;
  }
}

export class SetMinimumBidPercentCall extends ethereum.Call {
  get inputs(): SetMinimumBidPercentCall__Inputs {
    return new SetMinimumBidPercentCall__Inputs(this);
  }

  get outputs(): SetMinimumBidPercentCall__Outputs {
    return new SetMinimumBidPercentCall__Outputs(this);
  }
}

export class SetMinimumBidPercentCall__Inputs {
  _call: SetMinimumBidPercentCall;

  constructor(call: SetMinimumBidPercentCall) {
    this._call = call;
  }

  get _minBidPer10000(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinimumBidPercentCall__Outputs {
  _call: SetMinimumBidPercentCall;

  constructor(call: SetMinimumBidPercentCall) {
    this._call = call;
  }
}

export class SetNftToAuctionCall extends ethereum.Call {
  get inputs(): SetNftToAuctionCall__Inputs {
    return new SetNftToAuctionCall__Inputs(this);
  }

  get outputs(): SetNftToAuctionCall__Outputs {
    return new SetNftToAuctionCall__Outputs(this);
  }
}

export class SetNftToAuctionCall__Inputs {
  _call: SetNftToAuctionCall;

  constructor(call: SetNftToAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _startingPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _expiresIn(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetNftToAuctionCall__Outputs {
  _call: SetNftToAuctionCall;

  constructor(call: SetNftToAuctionCall) {
    this._call = call;
  }
}

export class SetNftToSellCall extends ethereum.Call {
  get inputs(): SetNftToSellCall__Inputs {
    return new SetNftToSellCall__Inputs(this);
  }

  get outputs(): SetNftToSellCall__Outputs {
    return new SetNftToSellCall__Outputs(this);
  }
}

export class SetNftToSellCall__Inputs {
  _call: SetNftToSellCall;

  constructor(call: SetNftToSellCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _sellingPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetNftToSellCall__Outputs {
  _call: SetNftToSellCall;

  constructor(call: SetNftToSellCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
