const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const { connectDB } = require("./config/db");
const productRouter = require("./routes/products");
const userRouter = require('./routes/user.route');

const port = process.env.port || 3002;
const app = express();

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});

//SWAGGER
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "A REST Product API",
    },
    servers: [
      {
        url: "http://localhost:3002",
      },
    ],
  },
  apis: ["./controllers/*.js"],
};
const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
app.use("/products", productRouter);
app.use("/users", userRouter);

app.get("/test", (req, res) => {
  res.status(200).send("testing routes working fine");
});

//ERROR HANDLER
app.use(clientError)
app.use(serverError)