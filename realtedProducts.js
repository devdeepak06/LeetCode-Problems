// Define your products and their related products
const products = [
  { name: 'Product A', related: ['Product B', 'Product C', 'Product E'] },
  { name: 'Product B', related: ['Product A', 'Product D', 'Product E'] },
  { name: 'Product C', related: ['Product A', 'Product D'] },
  { name: 'Product D', related: ['Product B', 'Product C'] },
  { name: 'Product E', related: ['Product A', 'Product B'] }
];

// Use a Set to store unique related products
const uniqueRelated = new Set();

// Iterate through each product to collect unique related products
products.forEach(product => {
  product.related.forEach(related => {
    uniqueRelated.add(related);
  });
});

// Convert the Set back to an array for easier manipulation or display
const uniqueRelatedArray = Array.from(uniqueRelated);

// Display products and their unique related products
products.forEach(product => {
  console.log(`Product: ${product.name}`);
  console.log(`Related Products: ${product.related.join(', ')}`);
  console.log('---');
});

console.log('Unique Related Products:', uniqueRelatedArray.join(', '));
