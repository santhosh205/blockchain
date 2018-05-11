const Blockchain = require("./blockchain")

const exchange = new Blockchain()

exchange.addBlock(["My name is Santhosh Dasari"])

console.log(exchange.chain[exchange.chain.length-1].toString())
