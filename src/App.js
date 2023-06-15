

function App() {
  return(
    <>
    <MessageDemo name = "Umair" email="u@gamil.com"/>
    <MessageDemo name="Waseem" email="w@gmail.com"/>
    <MessageDemo name="Khan" email="k@gmail.com"/>
    <MessageDemo id="230340320124"/>
    
    
    
    </>
  );
}
function MessageDemo({name, email}) {
  return (
    <>
    <h5>Hello {name} {email}</h5>
    {/* <h5>CDAC ID:- {props.id}</h5> */}
    </>
  );
}
  
export default App;

