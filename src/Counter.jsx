import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(0);

  // method 1
  /* Better approach , since the clean up function only runs once when the component unmounts */
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("clean up function for timeInterval");
      clearInterval(timer);
    };
  }, []);

  //method 2
  /*seems not a good approach since the clean up function always run during state update*/
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCount(count + 1);
  //     }, 1000);

  //     return () => {
  //       console.log("clean up function for timeInterval");
  //       clearInterval(timer);
  //     }
  //   },[count]);

  useEffect(() => {
    console.log("check changed");
    return () => {
      console.log("----cleaup function for check-----");
    };
  }, [check]);

  return (
    <div className="App">
      <Link to="/component">To Component A</Link>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCheck((count) => count + 1)}>
          check is {check}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Counter;
