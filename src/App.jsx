import React from "react";
import UserCard from "./UserCard";
import "./App.css"; // Make sure this file exists!

const App = () => {
  return (
    <div className="card-container">
      <UserCard name="John Doe" email="john@example.com" age={25} bgColor="#a0e7e5" />
      <UserCard name="Jane Smith" email="jane@example.com" age={30} />
      <UserCard name="Alex Johnson" email="alex@example.com" age={28} bgColor="#f5a623" />
    </div>
  );
};

export default App;
