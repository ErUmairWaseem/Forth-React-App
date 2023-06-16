import { useState } from "react";

function  App() {
  return(
    <>
       <h1>My TODO</h1>
       <MyToDo />
    </>
   
  );
}

function MyToDo() {


  let[todo, setTodo] = useState({task : ""});

  let handleTaskAction = (e) =>{
    console.log(e.target);

    let newTodo = {...todo, task: e.target.value}
    setTodo(newTodo);

  };

  let addTodoAction = () => {
    alert (todo.task)
  };
  

  return(
    <>
      <input 
      className="form-control" 
      type="text" 
      placeholder="Enter Task"
      value={todo.task}
      onChange={handleTaskAction}
      />
      {/* <input className="form-control" type="text" placeholder="Enter Discription"/> */}
      <input type="button" value="Add Todo" onClick={addTodoAction}/>
    </>
  );
}
export default App;