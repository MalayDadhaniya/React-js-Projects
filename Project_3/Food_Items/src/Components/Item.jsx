import styles from "./Item.module.css";

const Item = ({ FoodItem, handleOnClick }) => {

    return (
        <>
            <li className="list-group-item">{FoodItem}
                <button className={styles.btn}
                    onClick={handleOnClick}
                >Buy</button>
            </li >
        </>
    );
};

export default Item;