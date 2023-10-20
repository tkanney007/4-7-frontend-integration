//import styles from "./ItemDisplay.module.css";

const ItemDisplay = ({ list }) => {
  return (
    <div className="flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-100" : null}
              >
                <td className="border px-4 py-2">{item.item_name}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">{item.category_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemDisplay;
