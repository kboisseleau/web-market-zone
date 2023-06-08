import { useState } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSearch, BiMessageDetail, BiUser} from 'react-icons/bi'
import {GrAddCircle, GrClose} from 'react-icons/gr'
import {HiOutlineHeart} from 'react-icons/hi'
import logo from '../asset/images/logo.png'
import './NavBarMobile.scss';


function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div id="navbar-mobile">
        <button id="burger-btn" onClick={toggleMenu}><GiHamburgerMenu size="2rem" /></button>

        <div className={`${isOpen ? 'show-menu' : 'hide-menu'}`}>
          <div id="nav-mobile-header">
            <Link to="/" id="nav-content-logo">
              <img id="nav-logo-mobile" src={logo} alt="" />
            </Link>
            <button id="close-btn" onClick={closeMenu}>
              <GrClose size="1.5em" />
            </button>
          </div>

          <hr/>
          <ul>
            <li>
              <Link to="/add-product" className="" onClick={closeMenu}>
                <GrAddCircle />
                <p className="">Ajouter un produit</p>
              </Link>
            </li>
            <li>
              <Link to="/search" className="" onClick={closeMenu}>
                <BiSearch/>
                <p className=" hover">Rechercher</p>
              </Link>
            </li>
            <hr/>
            <li>
              <Link to="/messages" className="" onClick={closeMenu}>
                <BiMessageDetail/>
                <p className="">Messages</p>
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="" onClick={closeMenu}>
                <HiOutlineHeart/>
                <p className="">Favoris</p>
              </Link>
            </li>
          </ul>
          <hr />
          <div>
            Catégories
          </div>
          <ul>
          <li>
            <Link to="/login" className="" onClick={closeMenu}>
              <BiUser/>
              <p className="">Se connecter</p>
            </Link>
            </li>
          </ul>
        </div>



      </div>
      <Link to="/">
        <img id="home-logo-mobile" src={logo} alt="" />
      </Link>
    </>
  );
}

export default NavbarMobile;