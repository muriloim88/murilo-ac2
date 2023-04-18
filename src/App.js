import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Link1 = () => <h1>Link 1</h1>;
const Link2 = () => <h1>Link 2</h1>;


const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Link 1</Link> | <Link to="about">Link 1</Link> |{' '}
    </nav>
    <Routes>
      <Route path="/" element={<Link1 />} />
      <Route path="about" element={<Link2 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
