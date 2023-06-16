import { useState } from "react";
import MyTodo from "./pages/MyTodo";

function App() {
  return (
    <>
    <h1>Registration</h1>
    <MyRegistration/>
    
    </>
  );
}
function MyRegistration() {
  let[user, setUser] = useState({
    username: "", 
    password: "", 
    email: "", 
    mobile:""
  });

  let handleUserNameAction = (e) => {
    let newUser = {...user, username: e.target.value}
    setUser(newUser);
  };
  let handlePasswordAction = (e) => {
    let newUser = {...user, password: e.target.value}
    setUser(newUser);
  };
  let handleEmailAction = (e) => {
    let newUser = {...user, email: e.target.value}
    setUser(newUser);
  };
  let handleMobileAction = (e) => {
    let newUser = {...user, mobile: e.target.value}
    setUser(newUser);
  };
  let registerAction = async()=>{
    // connect backend
      let url = 
      `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`
      await fetch(url);

      // to clear the input field
      let newUser = {
        username: "", 
        password: "", 
        email: "", 
        mobile:""
      };
      setUser(newUser);
  };
  return(
          <>
            <input 
          type="text" 
          className="form-control" 
          placeholder="Enter Username" 
          value={user.username}
          onChange={handleUserNameAction}
          />
          <input type="text"
          className="form-control"
          placeholder="Enter Password"
          value={user.password}
          onChange={handlePasswordAction}
          />
          <input type="text"
          className="form-control"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleEmailAction}
          />
          <input type="text"
          className="form-control"
          placeholder="Enter Mobile"
          value={user.mobile}
          onChange={handleMobileAction}
          />
          <input type="button" value="Register" className="w-100" onClick={registerAction}/>
          </>
  );
}

export default App;