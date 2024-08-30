import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

interface DataItem {
  id: number;
  [key: string]: string | number;
}

const CRUDComponent: React.FC<{ data: DataItem[] }> = ({ data }) => {
  const [items, setItems] = useState<DataItem[]>(data);

  // const addItem = () => {
  //   const newItem = { id: items.length + 1, name: '', value: '' };
  //   setItems([...items, newItem]);
  // };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: number, field: string, value: string | number) => {
    setItems(
      items.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <Form.Control
                type="text"
                value={item.name as string}
                onChange={(e) => updateItem(item.id, 'name', e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                type="text"
                value={item.value as string}
                onChange={(e) => updateItem(item.id, 'value', e.target.value)}
              />
            </td>
            <td>
              <Button variant="danger" onClick={() => deleteItem(item.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CRUDComponent;
