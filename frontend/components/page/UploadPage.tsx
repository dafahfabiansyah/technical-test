import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUploadComponent from "../fileUploadComponents";
import { useNavigate } from "react-router-dom";

const UploadPage: React.FC = () => {
  const [, setCsvData] = useState<string[][]>([]);
  const navigate = useNavigate();

  const handleFileUpload = (data: string[][]) => {
    setCsvData(data);
    navigate("/table", { state: { csvData: data } });
  };

  return (
    <div>
      <h1>Upload CSV File</h1>
      <FileUploadComponent onFileUpload={handleFileUpload} />
    </div>
  );
};

export default UploadPage;
