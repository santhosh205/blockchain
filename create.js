const Blockchain = require("./blockchain")

const exchange = new Blockchain()

exchange.addBlock({
  amount: 100,
  debitAccount: "Me",
  creditAccount: "You"
})

console.log("New block has been added")
console.log(exchange.chain[exchange.chain.length-1].toString())

if (exchange.isChainValid()) {
  console.log("Blockchain is valid")
} else {
  console.log("Blockchain is not valid!")
}

exchange.addBlock({
  amount: 150,
  debitAccount: "Me",
  creditAccount: "You"
})

console.log("Another block has been added")
console.log(exchange.chain[exchange.chain.length-1].toString())

if (exchange.isChainValid()) {
  console.log("Blockchain is valid")
} else {
  console.log("Blockchain is not valid!")
}

console.log("Data has been changed")

exchange.chain[exchange.chain.length-1].data.amount = 200

console.log(exchange.chain[exchange.chain.length-1].toString())

if (exchange.isChainValid()) {
  console.log("Blockchain is valid")
} else {
  console.log("Blockchain is not valid!")
}
