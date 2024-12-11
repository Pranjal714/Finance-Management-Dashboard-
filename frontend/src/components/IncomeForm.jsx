import React, {useState} from "react";
import axios from "../services/api";
import "./Layout.css";

const IncomeForm = () => {
    const [amount, setAmount] = useState("");
    const [source, setSource] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/income/", {amount, source})
          .then(() => {
            setAmount("");
            setSource("");
            alert("Income record added successfully!");
          }
        )
        .catch((err) => console.error(err));

    };

    return (
        <div className="container">
            <h2>Add Income</h2>
        <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              />
            <input
              type="text"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
              />
              <button type="submit">Add Income</button>
        </form>
        </div>
    );
};

export default IncomeForm;