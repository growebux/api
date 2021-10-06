const Product = require("../models/product");

async function addProductController(req, res) {
  const product = req.body;

  try {
    const newProduct = await Product.create(product);
    res.json(newProduct);
  } catch (e) {
    res.json(e.message);
  }
}

async function getProductController(req, res) {
  const techBagId = req.params.id;

  const product = await Product.findOne({ _id: techBagId });
  res.json(product);
}

async function getProductsController(req, res) {
  const allProducts = await Product.find({});
  res.json(allProducts);
}

function updateProductController(req, res) {
  const techBagId = req.params.id;
  const newTechbag = req.body;

  const foundNewTechbag = eletronics.find(
    (techBag) => techBag.id === techBagId
  );

  if (!foundNewTechbag) {
    return res.json({
      error: "Sorry no product found with this id",
      code: 400,
    });
  }

  const updatedTechbag = {
    ...foundNewTechbag,
    ...newTechbag,
  };

  const filteredEletronic = eletronics.filter(
    (techBag) => techBag.id !== techBagId
  );

  eletronics = [...filteredEletronic, updatedTechbag];

  res.json(updatedTechbag);
}

async function deleteProductController(req, res) {
  const techBagId = req.params.id;

  const result = await Product.findOneAndRemove({ _id: techBagId });

  res.json(result);
}

module.exports = {
  addProductController,
  getProductController,
  getProductsController,
  updateProductController,
  deleteProductController,
};
