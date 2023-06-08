import React from "react";

export default function (props) {
  return (
    <div>
      <h2>Address:</h2>
      <ul>
        <li>{props.city}</li>
        <li>{props.postalCode}</li>
        <li>{props.street} {props.house}</li>
      </ul>

    </div>);
}
