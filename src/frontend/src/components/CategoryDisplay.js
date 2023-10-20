import styles from "./CategoryDisplay.module.css";

const CategoryDisplay = ({ list, handlerClick }) => {
  return (
    <div className="flex justify-center">
      <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mt-6 mb-6">
        {list &&
          list.map((category) => (
            <button
              key={category.id}
              onClick={() => handlerClick(category.id)}
              type="button"
              className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              {category.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
