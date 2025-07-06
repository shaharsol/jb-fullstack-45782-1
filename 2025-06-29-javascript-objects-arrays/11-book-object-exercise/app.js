const book = {
  author: "David Grossman",
  publication: "Am Oved",
  pages: 204,
  price: 89.9,
};

book.price = 0.8 * book.price;

console.log(`price after discount is ${book.price}`);
