import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home';
import Cuisines from './pages/Cuisines/Cuisines';
import Restaurant from './pages/Restaurants/Restaurants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Checkout from './pages/Checkout/Checkout';
// import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cuisine/:cuisineid' element={<Cuisines />} />
        <Route path='/restaurants/:restaurantid' element={<Restaurant/>} />
        <Route path='/menu' element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      {/* <GlobalFooter/> */}
    </Router>
  );
}

export default App;
