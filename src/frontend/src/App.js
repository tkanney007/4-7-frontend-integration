import {useState, useEffect} from "react";
import CategoryDisplay from "./components/CategoryDisplay";
import AddCategoryForm from "./components/AddCategoryForm";

import './App.css';
import apiConn from './api/conn';

function App() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await apiConn.get("/categories");
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 

  const createCategory = async (categoryName) => {
    try {
      const response = await apiConn.post("/categories", {name: categoryName});
      console.log(response.data);
      getCategories();
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      <h1>Category List</h1>
      <AddCategoryForm handlerAddCategory={createCategory}/>
      <CategoryDisplay list={categories}/>
    </div>
  );
}

export default App;
