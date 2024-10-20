import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import StudentManagement from './components/StudentManagement';
import './index.css'; // or the path to your CSS file
function App() {
  return (
    <div>
      <StudentManagement />
    </div>
  );
}

export default App;
