## Brief

### Preparation

Have the students create a blank React project to use a frontend and use the codebase from the previous lesson for the backend.

Clean up the src directory of the React project and create two folders for `components` and `api`.

### Lesson Overview

This lesson focuses on creating an end-to-end application using React as a frontend and Express as a backend. The learners will be able to use the frontend to display the data from the database through requests to the server.

---

## Part 1 - Backend Preparation

*Note: The server from the previous lesson will be used as the backend server for this lesson.*

In order to prepare the backend for connections from frontend client, the following must be done:
1. Allow cross-origin requests to be processed
2. Have a distinct port to host the server.

### Cross-origin Requests

In order for the backend server to allow cross-origin requests, a library called `cors` can be used. Install `cors` in the backend by doing `npm install cors`.

After `cors` is installed, it then can be used as a middleware before the routes.

```js
//index.js
const express = require('express');
const cors = require("cors");
...
const port = 3001; //change this to port 3001 to prevent conflicts with React's default port.

app.use(cors()); //This allows sites to connect to this API.
app.use(express.json());
...

```

Note that the port also needs to be changed to 3001 (or other values) to prevent conflicts with React's default port.

---

## Part 2 - Connecting the frontend and backend

As discussed in the previous module, a React client can connect to a backend server through different ways such as Axios and FetchAPI. For this part of the lesson, Axios will be used to connect and consume the endpoints of the backend server.

### Creating the connection file

Create the connection file in the api folder.

```js
//conn.js
import axios from "axios";

const BASE_URL = "http://localhost:3001";
const apiConn = axios.create({baseURL: BASE_URL});

export default apiConn;
```

### Displaying categories

Create a component called CategoryDisplay.js to display all the categories.

```js
//CategoryDisplay.js
import styles from "./CategoryDisplay.module.css";

const CategoryDisplay = ({list}) => {
    return (
        <div>
            <h2>List of categories</h2>
            <ul>
            {list && 
                list.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default CategoryDisplay;
```

In App.js, create a method that would connect to the server and consume the `GET /categories` endpoint.

```js
//App.js
import {useState, useEffect} from "react";
import CategoryDisplay from "./components/CategoryDisplay";

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      <h1>Category List</h1>
      <CategoryDisplay list={categories}/>
    </div>
  );
}

export default App;
```

Note how useEffect is used to populate the contents of the categories state as soon as the page is rendered.

### Adding categories to the list.

Create a new component called AddCategoryForm.js to have a form that would handle creating a new category.

```js
//AddCategoryForm.js
import { useState } from "react";

const AddCategoryForm = ({handlerAddCategory}) => {
    const [categoryName, setCategoryName] = useState("");

    const handlerName = (event) => {
        setCategoryName(event.target.value);
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        handlerAddCategory(categoryName);
    }

    return (
        <div>
          <form onSubmit={handlerSubmit}>
            <input type='text' name='name' placeholder='Category name' onChange={handlerName} />
            <button>Add</button>
          </form>
        </div>
      )
}

export default AddCategoryForm;
```

Recall how functions can be passed from a parent component to a child component. The definition of the `handleAddCategory` method is defined in App.js

```js
//App.js
import {useState, useEffect} from "react";
import CategoryDisplay from "./components/CategoryDisplay";
import AddCategoryForm from "./components/AddCategoryForm";

...

  const getCategories = async () => {...} 
  ...
  const createCategory = async (categoryName) => {
    try {
      const response = await apiConn.post("/categories", {name: categoryName});
      console.log(response.data);
      getCategories();
    } catch (error) {
      console.log(error.message);
    }
  }
  ...
  return (
    <div className="App">
      <h1>Category List</h1>
      <AddCategoryForm handlerAddCategory={createCategory}/>
      <CategoryDisplay list={categories}/>
    </div>
  );
```

Test out the application by adding new categories. The new categories will now be persistent and is written in the database.

---

