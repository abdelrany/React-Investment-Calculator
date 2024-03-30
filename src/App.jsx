import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const isInputValid = userInput.duration > 0;
  const handleChange = (event) => {
    const { value, id } = event.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        [id]: +value,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} />
      {!isInputValid ? (
        <p className="center">Please enter a duration greater then 0 </p>
      ) : (
        <Table userInput={userInput} />
      )}
    </>
  );
}

export default App;
