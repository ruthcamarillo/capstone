
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Resources from './pages/Resources';
import Admin from './pages/Admin';
import NoPage from './pages/NoPage';

export const AppContext = React.createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;