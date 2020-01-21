const Main = require("../../models/main");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const mains = await Main.find({});
  res.status(200).json(mains);
}

async function show(req, res) {
  const main = await Main.findById(req.params.id);
  res.status(200).json(main);
}

async function create(req, res) {
  const main = await Main.create(req.body);
  res.status(201).json(main);
}

async function deleteOne(req, res) {
  const deletedMain = await Main.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMain);
}

async function update(req, res) {
  const updatedMain = await Main.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedMain);
}