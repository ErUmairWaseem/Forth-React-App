import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyNavigationLinks from "./pages/NavigationLinks";

function App() {
  return (
    <>
   <BrowserRouter>
   <MyNavigationLinks />
    <Routes>
      <Route path="/" element={<h1>Hello</h1>}/>
      <Route path="/home" element={<h1>Home</h1>}/>
      <Route path="/todo" element={<MyTodo/>}/>
      <Route path="/registration" element={<MyRegistration/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>

    <MyNavigationLinksUsingButton/>
    </BrowserRouter>
    </>
  );
}

function MyNavigationLinksUsingButton() {
  const navigate = useNavigate();

  let goToHomeAction = () => {
    navigate ("/home");
  };
  let goToTodoAction = () => {
    navigate("/todo");
  };
  let goToRegistrationAction = () => {
    navigate("/registration")
  };
   return (
    <div>
      <input type="button" value="Home" onClick={goToHomeAction} />
      <input type="button" value="ToDo" onClick={goToTodoAction} />
      <input type="button" value="Registration" onClick={goToRegistrationAction}/>
    </div>
   );
}


export default App;