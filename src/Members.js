import React from "react";

const Members = props => {
  return (
    <div className="note-list">
      {props.members.map(member => (
        <div className="note" key={member.id}>
          <h2>{member.role}</h2>
          <p>{member.lastName}</p>
          <p>{member.firstName}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;