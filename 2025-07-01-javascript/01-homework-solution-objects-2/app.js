const customer = {
  firstName: "yossi",
  lastName: "gold",
  email: "yossi@gov.il",
  phone: "555555",
  creditCard: {
    type: "Visa",
    number: "4242424242424242",
    valid: "242",
    cvv: "555",
  },
};

console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.email);
console.log(customer.phone);
console.log(customer.creditCard.type);
console.log(customer.creditCard.number);
console.log(customer.creditCard.valid);
console.log(customer.creditCard.cvv);

console.log("=========================");

for (const prop in customer) {
  if (prop === "creditCard") {
    for (const creditCardProp in customer.creditCard) {
      console.log(`${creditCardProp}: ${customer.creditCard[creditCardProp]}`);
    }
  } else console.log(`${prop}: ${customer[prop]}`);
}

console.log(customer);
