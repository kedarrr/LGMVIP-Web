import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(undefined);

  const getuserData = async() => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isClicked && getuserData();
  }, [isClicked]);

  const getData = () => {
    setIsClicked(true);
  };

  return (
    
    <div className="App">

        <nav class="navbar" id="nav">
          <div id="contain">
            <h1 class="h1">Get the User's Data 
              <button onClick={getData} class="button" id="btn">
                Get Users
              </button>
            </h1>
          </div>
        </nav>

 
      <div class="data">
        {data && data.map((item) => {
            return (
              <div class="card">
                <img src={item.avatar} alt="Avatar"/>
                  <p>
                    {item.id}] {item.first_name}{item.last_name} {item.email}
                  </p>
              </div>
            );
          })}
      </div>

    </div>

  );
}

export default App;