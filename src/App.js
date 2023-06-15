import { useState } from "react";


function App() {
  return(
    <>
    <h1>Stateful List</h1>
    <ListDemo/>
   
    </>
  );
}

function ListDemo() {
  let [list, setList] = useState(["Delhi"]);

  let addItemAction = () => {
    let inputRef = document.querySelector("#id1");
    let inputValue = inputRef.value;
    let newList = [inputValue, ...list]

    setList(newList);
  };

  return(
    <>
    <input type="text" id="id1" placeholder="Enter User Input" />
    <input type="button" value="Add New Value" onClick={addItemAction} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
