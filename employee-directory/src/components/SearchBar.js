import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <Form.Control
        type="text"
        placeholder="Enter in name or office location to filter."
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    );
  };

  export default SearchBar;