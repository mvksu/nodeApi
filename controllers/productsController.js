const productsService = require("../services/productsService")

const getAllProducts = (req, res) => {
    const allProducts = productsService.getAllProducts();

    res.send("Get all Products");
  };
  
  const getOneProduct = (req, res) => {
    const product = productsService.getOneProduct();

    res.send("Get an existing Product");
  };
  
  const createNewProduct = (req, res) => {
    const createdProduct = productsService.createNewProduct();

    res.send("Create a new Product");
  };
  
  const updateOneProduct = (req, res) => {
    const updatedProduct = productsService.updateOneProduct();

    res.send("Update an existing Product");
  };
  
  const deleteOneProduct = (req, res) => {
    const deletedProduct = productsService.deleteOneProduct();

    res.send("Delete an existing Product");
  };
  
  module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteOneProduct,
  };