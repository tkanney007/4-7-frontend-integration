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