const  Cat = require('../models/cat');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const cats = await Cat.find({});
  res.status(200).json(cats);
}

async function show(req, res) {
  const cat = await Cat.findById(req.params.id);
  res.status(200).json(cat);
}

async function create(req, res) {
  const cat = await Cat.create(req.body);
  res.status(201).json(cat);
}

async function deleteOne(req, res) {
  const deletedCat = await Cat.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedCat);
}

async function update(req, res) {
  const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedCat);
}