const SHA256 = require("crypto-js/sha256")

class Block {
  constructor (index, timestamp, data, previousHash="") {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = Block.calculateHash()
    this.nonce = 0
  }

  static calculateHash () {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
  }

  mineBlock (difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")) {
      this.nonce++
      this.hash = Block.calculateHash()
    }

    console.log("Block mined with hash: " + this.hash)
  }

  toString () {
    return "\nIndex: " + this.index +
           "\nTimestamp: " + this.timestamp +
           "\nData: " + JSON.stringify(this.data, null, 2) +
           "\nPrevious Hash: " + this.previousHash +
           "\nHash: " + this.hash +
           "\n"
  }
}

module.exports = Block
