import React, {useState} from "react";
import axios from "../services/api";
import "./Layout.css";

const ExpenseForm = () => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/expense/", {amount, description})
          .then(() => {
            setAmount("");
            setDescription("");
            alert("Expense record added successfully!");
          })
          .catch((err) => console.error(err));
    };

    return (
        <div className="container">
            <h1>Add Expense</h1>
        <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required />
            <button type="submit">Add Expense</button>
        </form>
        </div>
    );
};

export default ExpenseForm;