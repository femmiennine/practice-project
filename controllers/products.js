const { v4: uuidv4 } = require("uuid");

const { Product } = require("../models/products");

/**
 *@swagger
 *components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - title
 *        - price
 *        - rating
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated id of the product
 *        title:
 *          type: string
 *          description: title of the product
 *        price:
 *          type: number
 *          description: price of the product
 *        rating:
 *          type: number
 *          description: rating of the product
 *      example:
 *          id: ahiahuhauhuahuahuha
 *          title: iphone14
 *          price: 1450.55
 *          rating: 4.5
 */

// grouping requests into tags
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: E-Commerce app
 */

/**
 * @swagger
 * /products:
 *  get:
 *    summary: Returns all the products
 *    tags: [Products]
 *    responses:
 *      200:
 *        description: all the products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    summary: get the product with id
 *    tags: [Products]
 *    parameters:
 *      - in : path
 *        name : id
 *        schema:
 *          type: string
 *        required: true
 *        description: product id
 *    responses:
 *      200:
 *        description: the product with id
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/Product'
 *      404:
 *        description: the product with id was not found
 */
const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      res.status(404).send({
        message: `product is not found with the id ${req.params.id}`,
      });
    } else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * @swagger
 * /products:
 *  post:
 *    summary: create a new product
 *    tags: [Products]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/Product'
 *    responses:
 *      201:
 *        description: the product was created
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/Product'
 *      404:
 *        description: the product with id was not found
 *      500:
 *        description: server error
 */

 const addProduct= async(req,res) => {
  try{
     const newProduct = new Product({
     id: uuidv4(),
     title: req.body.title,
     price: req.body.price,
     image: req.file.filename,
   })
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch(error) {
    res.status(500).send({
       message: error.message,
    });
  }
};

/**
 * @swagger
 * /products/{id}:
 *  put:
 *    summary: update the product with id
 *    tags: [Products]
 *    parameters:
 *      - in : path
 *        name : id
 *        schema:
 *          type: string
 *        required: true
 *        description: product id
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: the product was updated
 *      404:
 *        description: the product with id was not found
 *      500:
 *        description: server error
 */
const updateProduct = async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id });
    if (product) {
      await Product.updateOne(
        { id: req.params.id },
        {
          $set: {
            title: req.body.title,
            price: Number(req.body.price),
            rating: Number(req.body.rating),
          },
        }
      );
      res.status(200).send({
        message: `product is updated successfully`,
      });
    } else {
      res.status(404).send({
        message: `product is not found with the id ${req.params.id}`,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    summary: delete the product with id
 *    tags: [Products]
 *    parameters:
 *      - in : path
 *        name : id
 *        schema:
 *          type: string
 *        required: true
 *        description: product id
 *    responses:
 *      200:
 *        description: the product was deleted
 *      404:
 *        description: the product with id was not found
 */
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.find({ id: req.params.id });
    if (product) {
      await Product.deleteOne({ id: req.params.id });
      res.status(200).send({
        message: `product is deleted successfully`,
      });
    } else {
      res.status(404).send({
        message: `product is not found with the id ${req.params.id}`,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
