import Item from "./Item";

const FoodItem = ({ items }) => {

    return (
        <>
            <ul className="list-group">
                {items.map((item) => (
                    <Item key={item} FoodItem={item}
                        handleOnClick={() => console.log(`${item} being bought !!!`)}
                    ></Item>
                ))}
            </ul>
        </>
    );
};

export default FoodItem;