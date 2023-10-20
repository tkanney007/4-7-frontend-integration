import { useState } from "react";

const AddItemForm = ({ handlerAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [desc, setDesc] = useState("");

  const handlerName = (event) => {
    setItemName(event.target.value);
  };
  const handlerPrice = (event) => {
    setPrice(event.target.value);
  };
  const handlerDesc = (event) => {
    setDesc(event.target.value);
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerAddItem(itemName, price, desc);
  };
  return (
    <div className="flex justify-center">
      <form className="w-full max-w-sm mt-12" onSubmit={handlerSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="item_name"
            >
              Item Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="item_name"
              type="text"
              placeholder="Enter Item Name"
              onChange={handlerName}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="price"
            >
              Price
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="price"
              type="text"
              placeholder="Enter Price"
              onChange={handlerPrice}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="desc"
            >
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="desc"
              type="text"
              placeholder="Enter description"
              onChange={handlerDesc}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
