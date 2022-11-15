const express = require("express");
const router = express.Router();
const productsController = require('../../controllers/productsController')

router.get("/", productsController.getAllProducts);

router.get("/:productId", productsController.getOneProduct);

router.post("/", productsController.createNewProduct);

router.patch("/:productId", productsController.updateOneProduct);

router.delete("/:productId", productsController.deleteOneProduct);

module.exports = router;