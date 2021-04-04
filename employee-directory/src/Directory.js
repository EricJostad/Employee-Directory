import "./Directory.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar.js"
import EmployeeTable from "./components/EmployeeTable.js";

const Title = () => (
  <h1 style={{ width: "100%", textAlign: "center" }}>Employee Directory</h1>
);

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
