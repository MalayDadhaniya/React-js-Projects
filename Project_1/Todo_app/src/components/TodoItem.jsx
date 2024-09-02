import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_items_store";

function TodoItem({ todoName, todoDate }) {

    const { hendleDeleteButton } = useContext(TodoItemsContext);

    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col-6">
                    <h3>{todoName}</h3>
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button"
                        onClick={() => hendleDeleteButton(todoName)}
                    >Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;