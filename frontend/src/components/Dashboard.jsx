/*import React, {useEffect, useState} from "react";
//import {Bar, Pie} from "react-chartjs-2";
import axios from "../services/api";
import axios from "axios";
import "./Layout.css";

const Dashboard = () => {
    //const [data, setData] = useState({income: 0, expenses: 0, savings: 0});
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/dashboard/").then((response) => setData(response.data));
    }, []);

    return(
        <div className="container">
            <h1>Dashboard</h1>
            <div className="card">
            <h2>Income</h2>
            <p>${data.income}</p>
            </div>
            <div className="card"> 
            <h2>Expenses</h2>
            <p>${data.expenses}</p>
            </div>
            <div className="card">
            <h2>Savings</h2>
            <p>${data.savings}</p>
            </div>
        </div>
    );
};

export default Dashboard; */

import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [savings, setSavings] = useState([]);

    useEffect(() => {
        // Fetch incomes
        axios.get('/api/incomes/')
            .then(response => {
                console.log("Incomes:", response.data);
                setIncomes(response.data);
            })
            .catch(error => console.error("Error fetching incomes:", error));

        // Fetch expenses
        axios.get('/api/expenses/')
            .then(response => {
                console.log("Expenses:", response.data);
                setExpenses(response.data);
            })
            .catch(error => console.error("Error fetching expenses:", error));

        // Fetch savings
        axios.get('/api/savings/')
            .then(response => {
                console.log("Savings:", response.data);
                setSavings(response.data);
            })
            .catch(error => console.error("Error fetching savings:", error));
    }, []);

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <div className="card">
                <h2>Total Income</h2>
                <p>${incomes.reduce((sum, income) => sum + parseFloat(income.amount || 0), 0)}</p>

            </div>
            <div className="card">
                <h2>Total Expenses</h2>
                <p>${expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0)}</p>
            </div>
            <div className="card">
                <h2>Total Savings</h2>
                <p>${savings.reduce((sum, saving) => sum + parseFloat(saving.saved_amount || 0), 0)}</p>
                
            </div>
            
            
            
        </div>
    );
}

export default Dashboard;
