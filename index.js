const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const { connectDB } = require("./config/db");
const productRouter = require("./routes/products");

const port = process.env.port || 3002;
const app = express();

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});

// swagger STEP 1 This can be moved to utils then import to index /app
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

//import STEP then this is STEP 2 in index/app
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
// swaggerDocs(app, Number(port))

app.use(cors());
app.use(morgan("dev"));
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing application/json
app.use(bodyParser.json());

app.use("/products", productRouter);

app.get("/test", (req, res) => {
  res.status(200).send("testing routes working fine");
});
