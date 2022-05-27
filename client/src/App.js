import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    const response = await axios.get("https://basicexpressdeploy.herokuapp.com/api/v1/user");
    console.log(response);
    setUser(response.data.data);
  };

  return (
    <>
      <section>
        <div> Name: {user?.name}</div>
        <div>Age: {user?.age}</div>
      </section>
      <button onClick={getUser}>Get User!</button>
    </>
  );
}

export default App;
