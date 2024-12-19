import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ProtestDetail from './components/ProtestDetail';
import CreateProtest from './components/CreateProtest';

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Routes>
          <Route path="/protests/new" element={<CreateProtest />} />
          <Route path="/protests/:id" element={<ProtestDetail />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App; 