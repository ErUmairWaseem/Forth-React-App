

function App() {
  return(
    <>
    <MessageDemo name = "Umair"/>
    <MessageDemo name="Waseem"/>
    <MessageDemo name="Khan"/>
    <MessageDemo id="230340320124"/>
    
    
    
    </>
  );
}
function MessageDemo(props) {
  return (
    <>
    <h5>Hello {props.name} {props.id}</h5>
    {/* <h5>CDAC ID:- {props.id}</h5> */}
    </>
  );
}
  
export default App;

