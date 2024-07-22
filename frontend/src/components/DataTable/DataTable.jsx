import React, { useEffect, useState, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api';

function DataTable() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await api.get('/api/datatable/data/');
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle sorting
  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedContacts = useMemo(() => {
    let sortableContacts = [...contacts];
    if (sortConfig.key !== null) {
      sortableContacts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableContacts;
  }, [contacts, sortConfig]);

  const filteredContacts = useMemo(() => {
    return sortedContacts.filter((item) => {
      return (
        (item.first_name && item.first_name.toLowerCase().includes(search.toLowerCase())) ||
        (item.last_name && item.last_name.toLowerCase().includes(search.toLowerCase())) ||
        (item.email && item.email.toLowerCase().includes(search.toLowerCase())) ||
        (item.phone && item.phone.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }, [search, sortedContacts]);

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>
            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => requestSort('number')}>First Name</th>
              <th onClick={() => requestSort('last_name')}>Last Name</th>
              <th onClick={() => requestSort('email')}>Email</th>
              <th onClick={() => requestSort('phone')}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default DataTable;
