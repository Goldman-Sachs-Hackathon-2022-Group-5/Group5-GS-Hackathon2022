import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home';
import Cuisines from './pages/Cuisines/Cuisines';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cuisine/:cuisineid' element={<Cuisines />} />
        <Route path='/restaurant' element={<Home/>} />
        <Route path='/menu' element={<Home/>} />
        <Route path='/cart' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
