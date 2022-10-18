# API Documentation with swagger

- run the server and you will find the API documentation here [port number can be different based on your environment setup] `http://localhost:3002/api-docs`

```js
// creating a reusable schema
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

// get request for all products
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

// get request for single product
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

// post request
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

// put request

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

// delete request

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
```

## [Template was created with &hearts; by [anisul islam](https://www.youtube.com/c/anisulislamrubel) &copy;Anisul Islam]
