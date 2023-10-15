const slugify = require('slugify');

// Example array of existing slugs

// Function to generate a unique slug based on the product name
function generateUniqueSlug(productName, existingSlugs) {
  const baseSlug = slugify(productName, { lower: true });
  let uniqueSlug = baseSlug;
  let suffix = 2;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${suffix}`;
    suffix++;
  }

  return uniqueSlug;    
}

// // Example usage
// const productName = 'Awesome Product Name!';
// const uniqueSlug = generateUniqueSlug(productName, existingSlugs);
// console.log(uniqueSlug); // Output: "awesome-product-name-3"
module.exports = generateUniqueSlug