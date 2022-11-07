import React, { useState } from "react";

export default function Form({ data }) {
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(e) {
    const { value } = e.target;
    setUserInput(value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    data(userInput, setUserInput);
  }

  return (
    <div>
      <header className="App-header">
        <h1>Class Room Secrets Assessment</h1>
        <form onSubmit={formSubmitHandler} className="form">
          <label className="label_tag">
            Enter data (no space and seperated by comma) to find mean, media and
            mode
          </label>
          <input
            value={userInput}
            onChange={inputChangeHandler}
            className="input_field"
          />
        </form>
      </header>
    </div>
  );
}
