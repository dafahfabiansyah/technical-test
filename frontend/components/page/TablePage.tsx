import React from "react";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CSVTableComponent from "../tableComponents";
import CRUDComponent from "../CRUDComponents";
import { useLocation } from "react-router-dom";
import { handleImportData } from "../../src/handler/handleImportData";

const TablePage: React.FC = () => {
  const location = useLocation();
  const csvData = location.state?.csvData || [];

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(csvData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (
    <div>
      <h1>CSV Data Table</h1>
      {csvData.length > 0 && (
        <>
          <CSVTableComponent data={csvData} onImportData={handleImportData} />
          <button onClick={exportToExcel} className="btn btn-primary mt-3">
            Export to Excel
          </button>
          <CRUDComponent data={[]} />
        </>
      )}
    </div>
  );
};

export default TablePage;
