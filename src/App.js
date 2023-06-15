

function App() {
  return(
    <>
    <h1>Props Demo</h1>
    <ListDemo/>

    </>
  );
}

function ListDemo() {
  let data = "Hello Universe";
  let list = ["", "", "", ""];

  let list1 = [];
  for (let i = 0; i < 10; i++) {
    list1.push("");
    
  }


  return(
    <>
      <h1>{data}</h1>

      {/* {list.forEach((item) => item)} */}


      {list.map((item) => (
        <div>
          <h1>Hello Universe</h1>
        </div>
      ))}

      <hr />

      {list.map((item) => (
       <>
       <h1>hellooouuu</h1>
       </>
      ))}

    </>
  );
}
 
export default App;

