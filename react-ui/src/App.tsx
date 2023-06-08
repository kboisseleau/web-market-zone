import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './navbar/Navbar';
import CategoryBar from './category/CategoryBar';
import Home from "./view/Home";
import Favorites from "./view/Favorites";
import AddProduct from "./add-product/AddProduct";

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar/>
      <CategoryBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-product" element={<AddProduct />}/>
      </Routes>
    </Router>
  );
}

export default App;
