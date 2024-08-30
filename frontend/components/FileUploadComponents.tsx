import React from 'react';
import { Button } from 'react-bootstrap';

interface FileUploadProps {
  onFileUpload: (data: string[][]) => void;
}

const FileUploadComponent: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const parsedData = result.split('\n').map((row) => row.split(','));
        onFileUpload(parsedData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploadComponent;
