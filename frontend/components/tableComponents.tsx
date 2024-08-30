import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';

interface CSVTableProps {
  data: string[][];
  onImportData: (selectedRows: string[][]) => void;
}

const CSVTableComponent: React.FC<CSVTableProps> = ({ data, onImportData }) => {
  const [selectedRows, setSelectedRows] = useState<boolean[]>([]);

  useEffect(() => {
    if (data.length > 1) {
      setSelectedRows(Array(data.length - 1).fill(false));
    }
  }, [data]);

  const toggleRowSelection = (index: number) => {
    const newSelection = [...selectedRows];
    newSelection[index] = !newSelection[index];
    setSelectedRows(newSelection);
  };

  const handleImport = () => {
    const selectedData = data.slice(1).filter((_, index) => selectedRows[index]);
    console.log('Selected Data:', selectedData);
    onImportData(selectedData);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Table striped bordered hover responsive className="text-center">
            <thead>
              <tr>
                {data[0]?.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows[rowIndex] || false}
                      onChange={() => toggleRowSelection(rowIndex)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
            <Button variant="success" onClick={handleImport}>
              Import Selected Data
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CSVTableComponent;
