import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
    import Home from './pages';
    import Operators from './pages/operators';
    import Operator from './pages/operator';

    function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/operators' element={<Operators />} />
        <Route path='/operators/*' element={<Operator />} />
    </Routes>
</Router>
  );
}

export default App;
