const Block = require("./block")

class Blockchain {
  constructor () {
    this.chain = [Block.genesis()]
  }

  addBlock (data) {
    const block = Block.mineBlock(this.chain[this.chain.length-1], data)
    this.chain.push(block)

    return block
  }

  isChainValid () {
    for (let i=1; i<this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i-1]

      if (currentBlock.hash !== Block.hash(currentBlock.timestamp, currentBlock.lastHash, currentBlock.data)) {
        return false
      }

      if (currentBlock.lastHash !== previousBlock.hash) {
        return false
      }
    }

    return true
  }
}

module.exports = Blockchain
