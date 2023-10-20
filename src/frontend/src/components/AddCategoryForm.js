import { useState } from "react";

const AddCategoryForm = ({ handlerAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handlerName = (event) => {
    setCategoryName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerAddCategory(categoryName);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handlerSubmit}>
        <div className="grid mb-6 md:grid-cols-2">
          <div className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="Category name"
              onChange={handlerName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-6"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
