import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const EmployeeTable = ({ searchTerm }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500&nat=us")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res.results);
      });
  }, []);

  const searchHas = (str, match) =>
    str.toLowerCase().indexOf(match.toLowerCase()) !== -1;

  const handleSearchField = ({ name, location, dob }) =>
    !searchTerm ||
    searchHas(name.first, searchTerm) ||
    searchHas(name.last, searchTerm)  ||
    searchHas(location.city, searchTerm);
    // searchHas(dob.date, searchTerm)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Location</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {employees
          .filter(handleSearchField)
          .map(({ dob, name, location, email }, i) => (
            <EmployeeRow dob={dob} name={name} location={location} email={email} i={i} />
          ))}
      </tbody>
    </Table>
  );
};

const EmployeeRow = ({ dob, name, location, email, i }) => (
  <tr key={i}>
    <td>{i}</td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{dob.date}</td>
    <td>{location.city}, {location.state}</td>
    <td>{email}</td>
  </tr>
);

export default EmployeeTable;