import React from "react";

function card() {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src="logo192.png" alt="..."></img>
      <div className="card-body">
        <h3 className="card-title">Harsh</h3>
        <p className="card-text">
          Harshkumars-MacBook-Pro:react_directory harshLAD$ git init Initialized
          empty Git repository in
          Users/harshLAD/Documents/GitHub/React_Projects/
        </p>
        <a href="/" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default card;
