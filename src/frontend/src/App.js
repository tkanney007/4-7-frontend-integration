import { useState, useEffect } from "react";
import CategoryDisplay from "./components/CategoryDisplay";
import AddCategoryForm from "./components/AddCategoryForm";

import "./App.css";
import apiConn from "./api/conn";
import ItemDisplay from "./components/ItemDisplay";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [catID, setCatID] = useState(0);

  const getCategories = async () => {
    try {
      const response = await apiConn.get("/categories");
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createCategory = async (categoryName) => {
    try {
      const response = await apiConn.post("/categories", {
        name: categoryName,
      });
      console.log(response.data);
      getCategories();
    } catch (error) {
      console.log(error.message);
    }
  };

  const getItemsByCategory = async (categoryID) => {
    try {
      const response = await apiConn.get(`/categories/${categoryID}/items`);
      console.log(response.data.category_name);
      //let catItems = response.data.items;
      const catItems = response.data.items.map((item) => ({
        ...item,
        category_name: response.data.category_name,
      }));
      console.log(catItems);
      setItems(catItems);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addItemToCategory = async (name, price, description) => {
    try {
      const response = await apiConn.post(`/categories/${catID}/items`, {
        name,
        price,
        description,
        category_id: catID,
      });
      const catItems = response.data.items.map((item) => ({
        ...item,
        category_name: response.data.category_name,
      }));
      console.log(catItems);
      setItems(catItems);
    } catch (error) {}
  };

  const handlerCategoryClick = (categoryID) => {
    console.log(categoryID);
    setCatID(categoryID);
    setShowItems(true);
    getItemsByCategory(categoryID);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        List of categories
      </h1>
      <CategoryDisplay list={categories} handlerClick={handlerCategoryClick} />
      <AddCategoryForm handlerAddCategory={createCategory} />
      {showItems && <ItemDisplay list={items} />}
      {showItems && <AddItemForm handlerAddItem={addItemToCategory} />}
    </div>
  );
}

export default App;
