import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import SavingsGoalForm from "./components/SavingsGoalForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/income" element={<IncomeForm />} />
        <Route path="/expenses" element={<ExpenseForm />} />
        <Route path="/savings-goal" element={<SavingsGoalForm />} />
      </Routes>
    </Router>
  );
}

export default App;
