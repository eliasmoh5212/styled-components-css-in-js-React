import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
function App() {
  let items = ["New York", "Log Angeles", "Sanfranciso"];

  return (
    <>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={() => console.log(name)}
      ></ListGroup>
    </>
  );
}

export default App;
