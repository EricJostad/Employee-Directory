import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const EmployeeTable = () => {
    const [employees, setEmployees ] = useState([]);
    return (
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        {employees.map(({ id, name, email }) => <EmployeeRow id={id} name={name} email={email} />)}
    </tbody>
  </Table>
    );
  };

  const EmployeeRow = ({ id, name, email}) => (
    <tr>
        <td>{id}</td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{email}</td>
    </tr>
  );

  export default EmployeeTable;