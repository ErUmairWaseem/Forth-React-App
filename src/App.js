import {useRef, useState } from "react";


function App() {
  return(
    <>
    <h1>My Project</h1>
    <ListDemo/>
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["Delhi"]);

  let addItemAction = () => {
    
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];

    setList(newList);

    inputRef.current.value = "";
  };

  return(
    <>
    <div className="row justigy-content-center"
    style={{ height: "100vh" }}
    >
      <div className="col-sm-12 col-md-6">
      <h1>Ragistration App</h1>
      <input 
      className="form-control"
      type="text" 
      id="id1" 
      ref={inputRef}
      placeholder="Enter User Input" 
      />
      <input 
      className="form-control"
      type="text" 
      id="id1" 
      ref={inputRef}
      placeholder="Enter Password" 
      />
      <input 
      className="form-control"
      type="text" 
      id="id1" 
      ref={inputRef}
      placeholder="Enter Email" 
      />
      <input type="button"
      value="Login" 
      onClick={addItemAction} 
      />
      </div>
    </div>
    </>
  );
}
function MessageDemo({message}) {
  return(
    <>
       <h1>hello {message}</h1>
             <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio enim inventore quo iure modi incidunt tenetur excepturi magni consectetur pariatur error assumenda reiciendis, totam maxime hic.

             </p>
             <div>
              <input type="button" value="&#128077;" />
              <input type="button" value="&#128078;" />
             </div>
    </>
  ); 
}

export default App;
