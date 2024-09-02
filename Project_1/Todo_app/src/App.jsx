import AppName from "./Components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import Container from "./components/Container";
import WelcomeMessege from "./components/WelcomeMessege";
import "./App.css";
import TodoItemsContextProvider from "./store/todo_items_store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <Container>
          <center className="Item-container">
            <AppName></AppName>
            <AddTodo></AddTodo>
            <WelcomeMessege></WelcomeMessege>
            <Items></Items>
          </center>
        </Container>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;