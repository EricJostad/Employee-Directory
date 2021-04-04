import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <Form.Control
        type="text"
        placeholder="Enter in name, date of birth, age, location, or employee number to filter."
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    );
  };

  export default SearchBar;