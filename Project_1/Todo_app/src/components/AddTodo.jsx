import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo_items_store";

function AddTodo() {

    const dueDateItemElement = useRef();
    const NameItemElement = useRef();
    const { hendleOnNewItem } = useContext(TodoItemsContext);

    const hendleOnButtonClick = () => {
        const todoName = NameItemElement.current.value;
        const todoDueDate = dueDateItemElement.current.value;
        dueDateItemElement.current.value = "";
        NameItemElement.current.value = "";
        hendleOnNewItem(todoName, todoDueDate);
    };

    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo Here ... "
                        ref={NameItemElement}
                    />
                </div>
                <div className="col-4">
                    <input type="date"
                        ref={dueDateItemElement} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button"
                        onClick={hendleOnButtonClick}
                    >Add</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;