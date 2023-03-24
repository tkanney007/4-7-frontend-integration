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