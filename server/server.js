const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('./models/Product');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/images',express.static('images'))


mongoose.connect('mongodb://localhost:27017/ecommerce').then(()=>console.log("MongoDB connected")).catch(err=>console.error("MongoDB connection error:",err));

app.get('/api/products/search', async (req, res) => {
  const { q, category } = req.query; // Capture both query and category
  try {
      const filter = {};
      if (q) filter.name = { $regex: q, $options: 'i' }; // Case-insensitive keyword search
      if (category) filter.category = { $regex: category, $options: 'i' }; // Case-insensitive category search

      const products = await Product.find(filter);
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
  }
});



app.get('/api/category/search',async (req,res)=>{
  const {q} = req.query
  try {
    const products = await Product.find({category:{$regex: q,$options:'i'}});
    res.json(products)
  } catch (error) {
    
  }

})



















app.get('/',(req,res)=>{
  res.send("hello from express and mongodb:")
});
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Find all products in the collection
    res.json(products); // Send the products as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

















app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error); // Log the error details
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
}
);
