import { Link } from "react-router-dom";
import NavbarMobile from "./NavBarMobile";
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
              <Link to="/add-product" className="left-content">
                <GrAddCircle className="vertical-align-icon left-icon" size={sizeIcon} />
                <p className="text-icon">Ajouter un produit</p>
              </Link>
            </li>
            <li>
              <Link to="/search" className="left-content">
                <BiSearch className="vertical-align-icon left-icon" size={sizeIcon} />
                <p className="text-icon hover">Rechercher</p>
              </Link>
            </li>
          </div>

          <div id="right-navbar">
            <li>
              <Link to="/favorites" className="hover">
                <HiOutlineHeart className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Favoris</p>
              </Link>
            </li>
            <li>
              <Link to="/messages" className="hover">
                <BiMessageDetail className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Messages</p>
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover">
                <BiUser className="vertical-align-icon" size={sizeIcon} />
                <p className="text-icon">Se connecter</p>
              </Link>
            </li>
          </div>
        </ul>
        <NavbarMobile />
      </nav>
    </>
  );
}

export default Navbar;