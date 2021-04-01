import './Directory.css';
import React from 'react';
import EmployeeTable from './EmployeeTable';
import { Form, Table } from 'react-bootstrap';

const Title = () => (
  <h1 style={{ width: '100%', textAlign: 'center' }}>Employee Directory</h1>
);

const SearchBar = () => {
  return <Form.Control type="text" placeholder="Normal text" />;
};

function Directory() {
  return (
    <div>
      <Title/>
      <br/>
      <SearchBar/>
      <br/>
      <EmployeeTable/>
    </div>
  );
}

export default Directory;
