const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true }, // Adding stock field
  rating: { type: Number, min: 0, max: 5 }, // Adding rating field with validation
  images: [{ type: String }] // Adding images field as an array
});

// Creating the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
