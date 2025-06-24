import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import YourCalendar from './components/YourCalendar';
import EventEdit from './components/EventEdit';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<YourCalendar />} />
          <Route path="/editevent" element={<EventEdit/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
