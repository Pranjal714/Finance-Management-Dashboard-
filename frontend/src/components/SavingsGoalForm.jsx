import React, { useState } from "react";
import axios from "../services/api";

const SavingsGoalForm = () => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/savings-goal/", { goalName, goalAmount })
      .then(() => {
        setGoalName("");
        setGoalAmount("");
        alert("Savings goal added successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
        <h1>Set Savings Goal</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Goal Name"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Goal Amount"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
        required
      />
      <button type="submit">Set Goal</button>
    </form>
    </div>
  );
};

export default SavingsGoalForm;
