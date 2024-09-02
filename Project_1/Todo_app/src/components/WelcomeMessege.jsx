import { useContext } from "react";
import style from "./WelcomeMessege.module.css";
import { TodoItemsContext } from "../store/todo_items_store";

const WelcomeMessege = () => {

    const { todoItems } = useContext(TodoItemsContext);
    return (
        <>
            {todoItems.length === 0 && <h1 className={style.WelcomeMessege}> Hye! Enjoy Your Day</h1>}
        </>
    );
};

export default WelcomeMessege;