import "./Directory.css";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import EmployeeTable from "./components/EmployeeTable.js";

const Title = () => (
  <h1 style={{ width: "100%", textAlign: "center" }}>Employee Directory</h1>
);

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Normal text"
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
    />
  );
};

function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Title />
      <br />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <EmployeeTable searchTerm={searchTerm} />
    </div>
  );
}

export default Directory;
