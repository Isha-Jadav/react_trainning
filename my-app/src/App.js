import React, { useState } from "react";
import LoginForm from "./Components/loginForm";

function App() {
  const adminUser = {
    email: "admin123@gmail.com",
    password: "admin123"
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ){
      console.log("Logged in");
          setUser({
          name: details.name,
          email: details.email
        });
    }
    else {
      console.log("details do not match");
      setError("details do not match")
    }
  }

  const Logout = () => {
    setUser({name: "", email: "" });
  };

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="Welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}> LogOut </button>
        </div>
      ) : (
      <LoginForm Login={ Login} error = {error}  />
      )}
    </div>
  );
}

export default App;
