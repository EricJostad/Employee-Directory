import './App.css';
import { Form, Table } from 'react-bootstrap';

const Title = () => {
  <h1 style={{ width: '100%', textAlign: 'center' }}>Employee Directory</h1>
};

const SearchBar = () => {
  return <Form.Control type="text" placeholder="Normal text" />
};

const EmployeeTable = () => {
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  );
};


function App() {
  return (
    <>
      <Title/>
      <SearchBar/>
      <EmployeeTable/>
    </>
  );
}

export default App;
