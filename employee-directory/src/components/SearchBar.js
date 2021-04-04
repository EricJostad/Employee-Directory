import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

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

  export default SearchBar;