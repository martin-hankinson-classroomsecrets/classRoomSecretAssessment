import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const regex = /^[-.,0-9]+$/;
  const [value, setValue] = useState([]);

  const arrOfNum = [];

  function userInput(userInput, resetField) {
    const data = userInput.split(" ").join("").split(",");
    if (!regex.test(userInput)) {
      alert("invalid data entered");
      resetField("");
      return;
    }

    const isValid = data.find(
      (ele) => ele === "" || ele.startsWith(".") || ele.endsWith(".")
    );
    if (typeof isValid !== "undefined") {
      alert("invalid data entered");
      resetField("");
      return;
    }

    data.forEach((num) => {
      arrOfNum.push(Number(num));
    });

    arrOfNum.forEach((num) => {
      if (isNaN(num)) {
        alert("invalid decimal value !! Try again");
        resetField("");
        setValue([]);
        return;
      } else {
        setValue(arrOfNum);
      }
    });
  }

  return (
    <div className="App">
      <Form data={userInput} />
      <Result data={value} />
    </div>
  );
}

export default App;
