const Blockchain = require("./blockchain")
const Transaction = require("./transaction")

const myCoin = new Blockchain()

myCoin.createTransaction(new Transaction("Address 1", "Address 2", 100))
myCoin.createTransaction(new Transaction("Address 2", "Address 1", 150))

console.log("Starting mining...")
myCoin.minePendingTransactions("Address 3")

console.log("My balance at 'Address 3' is ", myCoin.getBalanceOfAddress("Address 3"))

console.log("Starting mining again...")
myCoin.minePendingTransactions("Address 3")

console.log("My balance at 'Address 3' is ", myCoin.getBalanceOfAddress("Address 3"))
