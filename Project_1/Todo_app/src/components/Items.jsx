import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo_items_store";

const Items = () => {

    const { todoItems } = useContext(TodoItemsContext);
    return (
        <div className="items-container">
            {todoItems.map((item) => (
                <TodoItem key={item.Name} todoName={item.Name} todoDate={item.dueDate}
                ></TodoItem>
            ))}
        </div >
    );
};

export default Items;