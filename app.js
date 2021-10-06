let techbag = {
  id: 1,
  name: "Asus",
  content: ["intel Pentium Silver", "1TB HDD", "8GB RAM", "Windows 10"],
};

let eletronics = [techbag];

function create(req, res) {
  const product = req.body;
  eletronics.push(product);

  res.json(eletronics);
}

function read(req, res) {
  res.json(eletronics);
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

function remove(req, res) {
  const techBagId = req.params.id;

  const removedTechBagList = eletronics.filter(
    (techBag) => techBag.id !== techBagId
  );

  eletronics = removedTechBagList;

  res.json(eletronics);
}

module.exports = {
  read,
  create,
  update,
  remove,
};
