import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUploadComponent from "../components/fileUploadComponents";
import CSVTableComponent from "../components/tableComponents";
import CRUDComponent from "../components/CRUDComponents";
import { handleImportData } from "../src/handler/handleImportData";

const App: React.FC = () => {
  const [csvData, setCsvData] = useState<string[][]>([]);

  const handleFileUpload = (data: string[][]) => {
    setCsvData(data);
  };

  return (
    <div>
      <h1>CSV Import and CRUD App</h1>
      <FileUploadComponent onFileUpload={handleFileUpload} />
      {csvData.length > 0 && (
        <CSVTableComponent data={csvData} onImportData={handleImportData} />
      )}
      <CRUDComponent data={[]} />{" "}
      {/* Pass initial data or fetched data from DB */}
    </div>
  );
};

export default App;
