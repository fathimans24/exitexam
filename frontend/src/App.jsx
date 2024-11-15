import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/main/Home';
import Navbar from './component/Navbar';
import TodoList from './component/Todolist';
import Body from './component/Body'

function App() {
  return (
    <div style={{
      backgroundImage: 'url("./")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
      <Router>
        <Navbar />
        <Body/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;