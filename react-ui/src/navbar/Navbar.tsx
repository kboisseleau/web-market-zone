import {
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
    <>
      <nav>
        <ul id="navbar">
          <div id="left-navbar">
            <li>
              <Link id="home-link" to="/">
                <img id="home-logo" src={logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/add-product">
                <GrAddCircle className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Ajouter un produit</p>
              </Link>
            </li>
          </div>

          <div id="right-navbar">
            <li>
              <Link to="/search">
                <BiSearch className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Rechercher</p>
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <HiOutlineHeart className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Favoris</p>
              </Link>
            </li>
            <li>
              <Link to="/messages">
                <BiMessageDetail className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Messages</p>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <BiUser className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Se connecter</p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;