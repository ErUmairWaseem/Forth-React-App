import {useRef, useState } from "react";


function App() {
  return(
    <>
    <h1>Stateful List</h1>
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
    <input 
    type="text" 
    id="id1" 
    ref={inputRef}
    placeholder="Enter User Input" 
    />
    <input type="button"
    value="Add New Value" 
    onClick={addItemAction} 
    />

      {list.map((item) => (
        < MessageDemo message = {item} />
      ))}
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
