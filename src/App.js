import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
    import Home from './pages';
    import Operators from './pages/operators';

    function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/operators' element={<Operators />} />
    </Routes>
</Router>
  );
}

export default App;
