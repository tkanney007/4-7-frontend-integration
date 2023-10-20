const Category = require("../models/categoryModel");
const Item = require("../models/itemModel");

exports.getAllCategories = async (req, res) => {
  const result = await Category.findAll();
  res.json(result);
};

exports.getSingleCategory = async (req, res) => {
  const result = await Category.findByPk(req.params.id);
  if (result != null) {
    return res.json(result);
  }
  return res.send("Category not found");
};

exports.getItemsByCategory = async (req, res) => {
  try {
    const result = await Category.findByPk(req.params.id, {
      attributes: ["id", ["name", "category_name"]],
      include: {
        model: Item,
        attributes: [["name", "item_name"], "price", "description"],
      },
    });
    if (result != null) {
      return res.json(result);
    }
    return res.send("No items found for this category");
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
};

exports.addNewCategory = async (req, res) => {
  await Category.create({
    name: req.body.name,
  });
  const result = await Category.findByPk(req.params.id);
  return res.json(result);
};

exports.addNewItem = async (req, res) => {
  try {
    await Item.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category_id: req.params.id,
    });
    const result = await Category.findByPk(req.params.id, {
      attributes: ["id", ["name", "category_name"]],
      include: {
        model: Item,
        attributes: [["name", "item_name"], "price", "description"],
      },
    });
    return res.json(result);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
};

exports.editCategory = async (req, res) => {
  const result = await Category.findByPk(req.params.id);
  if (result != null) {
    await Category.update(
      { name: req.body.name },
      { where: { id: req.params.id } }
    );
    return res.json(result);
  }
  return res.send("Category not found");
};

exports.deleteCategory = async (req, res) => {
  const result = await Category.findAll({ where: { id: req.params.id } });
  if (result != null) {
    await Category.destroy({ where: { id: req.params.id } });
    return res.json(result);
  }
  return res.send("Category not found");
};
