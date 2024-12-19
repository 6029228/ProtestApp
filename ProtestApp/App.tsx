import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import ProtestDetail from './components/ProtestDetail';
import CreateProtest from './components/CreateProtest';

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app">
          <Routes>
            <Route path="/protests/new" element={<CreateProtest />} />
            <Route path="/protests/:id" element={<ProtestDetail />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App; 