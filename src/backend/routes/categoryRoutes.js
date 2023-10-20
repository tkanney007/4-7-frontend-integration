const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);

router.get("/:id", categoryController.getSingleCategory);

router.get("/:id/items", categoryController.getItemsByCategory);

router.post("/", categoryController.addNewCategory);

router.post("/:id/items", categoryController.addNewItem);

router.put("/:id", categoryController.editCategory);

router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
