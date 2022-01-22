// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Creations(): Array<string> | null {
    let value = this.get("Creations");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set Creations(value: Array<string> | null) {
    if (!value) {
      this.unset("Creations");
    } else {
      this.set("Creations", Value.fromStringArray(<Array<string>>value));
    }
  }

  get Tokens(): Array<string> | null {
    let value = this.get("Tokens");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set Tokens(value: Array<string> | null) {
    if (!value) {
      this.unset("Tokens");
    } else {
      this.set("Tokens", Value.fromStringArray(<Array<string>>value));
    }
  }

  get Sales(): Array<string> | null {
    let value = this.get("Sales");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set Sales(value: Array<string> | null) {
    if (!value) {
      this.unset("Sales");
    } else {
      this.set("Sales", Value.fromStringArray(<Array<string>>value));
    }
  }

  get Auctions(): Array<string> | null {
    let value = this.get("Auctions");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set Auctions(value: Array<string> | null) {
    if (!value) {
      this.unset("Auctions");
    } else {
      this.set("Auctions", Value.fromStringArray(<Array<string>>value));
    }
  }

  get Bids(): Array<string> | null {
    let value = this.get("Bids");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set Bids(value: Array<string> | null) {
    if (!value) {
      this.unset("Bids");
    } else {
      this.set("Bids", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class History extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save History entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save History entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("History", id.toString(), this);
    }
  }

  static load(id: string): History | null {
    return changetype<History | null>(store.get("History", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("metaURI", Value.fromString(""));
    this.set("royaltyPercentage", Value.fromBigInt(BigInt.zero()));
    this.set("minter", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get metaURI(): string {
    let value = this.get("metaURI");
    return value!.toString();
  }

  set metaURI(value: string) {
    this.set("metaURI", Value.fromString(value));
  }

  get royaltyPercentage(): BigInt {
    let value = this.get("royaltyPercentage");
    return value!.toBigInt();
  }

  set royaltyPercentage(value: BigInt) {
    this.set("royaltyPercentage", Value.fromBigInt(value));
  }

  get minter(): string {
    let value = this.get("minter");
    return value!.toString();
  }

  set minter(value: string) {
    this.set("minter", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get history(): Array<string> | null {
    let value = this.get("history");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set history(value: Array<string> | null) {
    if (!value) {
      this.unset("history");
    } else {
      this.set("history", Value.fromStringArray(<Array<string>>value));
    }
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("seller", Value.fromString(""));
    this.set("sellingPrice", Value.fromBigInt(BigInt.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Sale entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Sale entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Sale", id.toString(), this);
    }
  }

  static load(id: string): Sale | null {
    return changetype<Sale | null>(store.get("Sale", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value!.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get sellingPrice(): BigInt {
    let value = this.get("sellingPrice");
    return value!.toBigInt();
  }

  set sellingPrice(value: BigInt) {
    this.set("sellingPrice", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("auction", Value.fromString(""));
    this.set("bidder", Value.fromString(""));
    this.set("bidPrice", Value.fromBigInt(BigInt.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bid entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bid", id.toString(), this);
    }
  }

  static load(id: string): Bid | null {
    return changetype<Bid | null>(store.get("Bid", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auction(): string {
    let value = this.get("auction");
    return value!.toString();
  }

  set auction(value: string) {
    this.set("auction", Value.fromString(value));
  }

  get bidder(): string {
    let value = this.get("bidder");
    return value!.toString();
  }

  set bidder(value: string) {
    this.set("bidder", Value.fromString(value));
  }

  get bidPrice(): BigInt {
    let value = this.get("bidPrice");
    return value!.toBigInt();
  }

  set bidPrice(value: BigInt) {
    this.set("bidPrice", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("seller", Value.fromString(""));
    this.set("startingPrice", Value.fromBigInt(BigInt.zero()));
    this.set("expiresAt", Value.fromBigInt(BigInt.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Auction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Auction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Auction", id.toString(), this);
    }
  }

  static load(id: string): Auction | null {
    return changetype<Auction | null>(store.get("Auction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value!.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get startingPrice(): BigInt {
    let value = this.get("startingPrice");
    return value!.toBigInt();
  }

  set startingPrice(value: BigInt) {
    this.set("startingPrice", Value.fromBigInt(value));
  }

  get currentBid(): string | null {
    let value = this.get("currentBid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentBid(value: string | null) {
    if (!value) {
      this.unset("currentBid");
    } else {
      this.set("currentBid", Value.fromString(<string>value));
    }
  }

  get bids(): Array<string> | null {
    let value = this.get("bids");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bids(value: Array<string> | null) {
    if (!value) {
      this.unset("bids");
    } else {
      this.set("bids", Value.fromStringArray(<Array<string>>value));
    }
  }

  get expiresAt(): BigInt {
    let value = this.get("expiresAt");
    return value!.toBigInt();
  }

  set expiresAt(value: BigInt) {
    this.set("expiresAt", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}
