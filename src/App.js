import { useState } from "react";

function App() {
  return (
    <>
    <h1>My Todo</h1>
    <MyTodo/>
    </>
  );
}

function MyTodo() {
  let [todo, setTodo] = useState({task: "", description: ""});
  
  let handleChangeTaskAction = (e) =>{
    let newTodo ={...todo, task: e.target.value};
    setTodo(newTodo);
  };

  let handleChangeTaskDescriptionAction = (e) => {
      //console.log(e.target);
    let newTodo ={...todo, description: e.target.value};
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);
    //alert(todo.task + todo.description);

    let url = `http://localhost:4000/addtodo?task=${todo.task}description=${todo.description}`
    await fetch(url);
  };
  return (
    <>
     
      <input  
      className="form-control" 
      type="text" 
      placeholder="Enter Task"
      value={todo.task} 
      onChange={handleChangeTaskAction}
      />

      <textarea 
      className="form-control" 
      cols="30" 
      rows="3" 
      placeholder="Eter Description"
      value={todo.description}
      onChange={handleChangeTaskDescriptionAction}
      ></textarea>
     
      <input type="button" value="Add Todo" onClick={addTodoAction}/>
    </>
  );
}
export default App;