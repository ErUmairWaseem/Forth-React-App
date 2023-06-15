import { useState } from "react";


function App() {
  return(
    <>
    <h1>Stateful LIst</h1>
    <ListDemo/>
    </>
  );
}

function ListDemo() {

  let [list, setList] = useState(["Delhi"]);

  let addItemAction = () =>{
    let newList = ["Mumbai", ...list];
    console.log(newList);

    setList(newList);
  };

  return(
    <>
    <input type="button" value="Add New Item" onClick={addItemAction} />
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  ); 
}

export default App;

