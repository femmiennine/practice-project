const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, "product title is required"],
    trim: true,
    minlength: [3, "product title length must be atleast 3 characters"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
  },
  image: {
    type: String,
    required: true,
  },
});

exports.Product = mongoose.model("Products", productsSchema);
