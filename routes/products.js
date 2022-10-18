const router = require("express").Router();
const { upload } = require("../middleware/fileUpload")

const {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.single("image"), addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
