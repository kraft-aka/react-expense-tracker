import React from "react";
import Card from "./Card";

export default function (props) {
  return (
    <Card>
      <h2>Address:</h2>
      <ul>
        <li>{props.city}</li>
        <li>{props.postalCode}</li>
        <li>
          {props.street} {props.house}
        </li>
      </ul>
    </Card>
  );
}
