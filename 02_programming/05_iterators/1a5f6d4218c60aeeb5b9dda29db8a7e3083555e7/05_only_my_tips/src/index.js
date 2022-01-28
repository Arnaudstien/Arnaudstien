function onlyMyTips(invoices) {
  if (invoices.filter((invoices) => invoices === "Yourself")) {
    console.log(invoices.filter((invoices) => invoices === "Yourself"));
  }
}
//return invoices.filter((invoices) => invoices === "Yourself");
//console.log(invoices);

//const result = words.filter(word => word.length > 6);

//return todaysInvoices.map([0].tip, todaysInvoices[1].tip, todaysInvoices[2].tip);
//todaysInvoices[0].tip, todaysInvoices[1].tip, todaysInvoices[2].tip; // Code here

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];
onlyMyTips(todaysInvoices);

//console.log(todaysInvoices[0].tip, todaysInvoices[1].tip, todaysInvoices[2].tip);

//function doubleOddNumbers(numbers) {
//  return numbers.filter((number) => number % 2 === 1).map((oddNumber) => oddNumber * 2);
//}

//doubleOddNumbers([1, 2, 3, 4, 5]);
// -> [2, 6, 10]

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
