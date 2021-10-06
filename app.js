const Product = require("./models/product");

let techbag = {
  id: 1,
  name: "Asus",
  content: ["intel Pentium Silver", "1TB HDD", "8GB RAM", "Windows 10"],
};

let eletronics = [techbag];

async function create(req, res) {
  const product = req.body;

  try {
    const newProduct = await Product.create(product);
    res.json(newProduct);
  } catch (e) {
    res.json(e.message);
  }

  //.insertOne(product);
}

async function readOne(req, res) {
  const techBagId = req.params.id;

  const product = await Product.findOne({ _id: techBagId });
  res.json(product);
}

async function read(req, res) {
  const allProducts = await Product.find({});
  res.json(allProducts);
}

function update(req, res) {
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

async function remove(req, res) {
  const techBagId = req.params.id;

  const result = await Product.findOneAndRemove({ _id: techBagId });

  res.json(result);
}

module.exports = {
  read,
  create,
  update,
  remove,
  readOne,
};
