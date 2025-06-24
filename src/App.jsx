import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import YourCalendar from './components/YourCalendar';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<YourCalendar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
