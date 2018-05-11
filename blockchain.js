const Block = require("./block")

class Blockchain {
  constructor () {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 4
  }

  createGenesisBlock () {
    return new Block(0, "11/05/2018", "Genesis Block", "f1r57-h45h")
  }

  getLatestBlock () {
    return this.chain[this.chain.length - 1]
  }

  addBlock (newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  isChainValid () {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i-1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }

    return true
  }
}

module.exports = Blockchain
