import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    hendleOnNewItem: () => { },
    hendleDeleteButton: () => { },
});

const todoItemsReducer = (currTodoItems, Action) => {
    let newTodoItems = currTodoItems;
    if (Action.type === "NEW_ITEM") {
        newTodoItems = [...currTodoItems, {
            Name: Action.payload.itemName,
            dueDate: Action.payload.itemDueDate,
        }];
    } else if (Action.type === "DELETE_ITEM") {
        newTodoItems = currTodoItems.filter(item => item.Name !== Action.payload.deleteItem);
    }
    return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, despatchTodoItems] = useReducer(todoItemsReducer, [])

    const hendleOnNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDueDate,
            }
        };
        despatchTodoItems(newItemAction);
    };

    const hendleDeleteButton = (deleteItem) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                deleteItem,
            }
        };
        despatchTodoItems(deleteItemAction);
    };

    return (
        <TodoItemsContext.Provider
            value={{ todoItems, hendleOnNewItem, hendleDeleteButton, }}
        >
            {children}
        </TodoItemsContext.Provider>
    );
};

export default TodoItemsContextProvider;