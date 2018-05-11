const SHA256 = require("crypto-js/sha256")

class Block {
  constructor (timestamp, lastHash, hash, data) {
    this.timestamp = timestamp
    this.lastHash = lastHash
    this.hash = hash
    this.data = data
  }

  toString () {
    return "\nBlock -\
            \nTimestamp: "+this.timestamp.toString()+
           "\nLast Hash: "+this.lastHash.substring(0, 10)+"...\
            \nHash: "+this.hash.substring(0, 10)+"...\
            \nData: "+JSON.stringify(this.data, null, 2)+"\n"
  }

  static genesis () {
    return new this(
      new Date(2018, 5, 11),
      "------------",
      "-f1r57-h45h-",
      {
        amount: 0,
        debitAccount: "None",
        creditAccount: "None"
      }
    )
  }

  static mineBlock (lastBlock, data) {
    const timestamp = Date.now()
    const lastHash = lastBlock.hash
    const hash = Block.hash(timestamp, lastHash, data)

    return new this(timestamp, lastHash, hash, data)
  }

  static hash (timestamp, lastHash, data) {
    return SHA256(timestamp.toString()+lastHash+JSON.stringify(data)).toString()
  }
}

module.exports = Block
