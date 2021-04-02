import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res.results);
      });
  }, []);

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
        {employees
          .filter((e) => !searchTerm || e.name.first.indexOf(searchTerm) !== -1)
          .map(({ dob, name, email }, i) => (
            <EmployeeRow dob={dob} name={name} email={email} i={i} />
          ))}
      </tbody>
    </Table>
  );
};

const EmployeeRow = ({ dob, name, email, i }) => (
  <tr key={i}>
    <td>{i}</td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{email}</td>
  </tr>
);

export default EmployeeTable;