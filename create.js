const Block = require("./block")
const Blockchain = require("./blockchain")

const myCoin = new Blockchain()

console.log("Mining Block 1...")
myCoin.addBlock(new Block(1, "14/05/2018", { amount: 100 }))

console.log("Mining Block 2...")
myCoin.addBlock(new Block(1, "15/05/2018", { amount: 150 }))
