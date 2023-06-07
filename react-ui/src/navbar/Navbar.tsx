import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {BiSearch, BiMessageDetail, BiUser} from 'react-icons/bi'
import {GrAddCircle} from 'react-icons/gr'
import {HiOutlineHeart} from 'react-icons/hi'
import logo from '../asset/images/logo.png'
import './Navbar.scss';

function Navbar() {
  const sizeIcon = "1.75em"
  return (
    <Router>
    <div>
      <nav>
        <ul id="navbar">
          <div id="left-navbar">
            <li>
              <Link id="home-link" to="/">
                <img id="home-logo" src={logo} alt="" />
                </Link>
            </li>
            <li>
              <GrAddCircle className="vertical-align-icon" size={sizeIcon} />
              <p className="text-icon">Ajouter un produit</p>
            </li>
          </div>

          <div id="right-navbar">
            <li>
              <BiSearch className="vertical-align-icon" size={sizeIcon} />
              <p className="text-icon">Rechercher</p>
            </li>
            <li>
              <HiOutlineHeart className="vertical-align-icon" size={sizeIcon} />
              <p className="text-icon">Favoris</p>
            </li>
            <li>
              <BiMessageDetail className="vertical-align-icon" size={sizeIcon} />
              <p className="text-icon">Messages</p>
            </li>
            <li>
              <BiUser className="vertical-align-icon" size={sizeIcon} />
              <p className="text-icon">Se connecter</p>
            </li>
          </div>

        </ul>
      </nav>

      <Routes>
{/*         <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Routes>
    </div>
  </Router>
  );
}

export default Navbar;