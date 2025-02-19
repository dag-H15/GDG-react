import React from "react";

const GroupMembers = () => {
  const members = ["abebe", "chala", "kebede", "Dagmawit", "aster"];

  return (
    <div>  
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
