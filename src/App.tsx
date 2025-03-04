import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;