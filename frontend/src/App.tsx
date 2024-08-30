import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from '../components/page/UploadPage';
import TablePage from '../components/page/TablePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
};

export default App;
