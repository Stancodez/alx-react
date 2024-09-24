import React from "react";
import logo from "./Holberton_logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <br />
        <br />

        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <br />
        <br />

        {/* OK button */}
        <button type="submit">OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
