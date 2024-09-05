import styles from "./FoodInput.module.css";

const FoodInput = ({ hendleKeyDown }) => {

    return (
        <>
            <input type="text" placeholder="Enter Food Name Here .... "
                onKeyDown={hendleKeyDown}
                className={styles.foodInput}
            />
        </>

    );
};

export default FoodInput;