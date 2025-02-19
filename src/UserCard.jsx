import React from "react";
import "./UserCard.css"; 

const UserCard = ({ name, email, age, bgColor = "#f0f0f0" }) => {
  return (
    <div className="user-card" style={{ backgroundColor: bgColor }}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
