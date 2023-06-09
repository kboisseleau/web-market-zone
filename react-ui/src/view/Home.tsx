import { useState } from 'react'
import {BsCartPlus, BsCartDashFill, BsFillHeartFill, BsHeart} from 'react-icons/bs'
import './Home.scss'


function Home() {
  //const [favoriteProduct, setFavoriteProduct] = useState([])
  const [isSave, setIsSave] = useState(false)
  const addProductCart = () => {
    console.log('add product to cart')
  }
  const removeProductCart = () => {
    console.log('remove product to cart')
  }
  const toggleFavorite = () => {
    setIsSave(!isSave)
    //update favorite with id add and remove
  }
  /* Loop on cardlist */
  return (
    <div id="home-content">
      <div className="card-list">
        <p>Titre produit</p>
        <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" />   
        <div className="btn-content">
          <button onClick={addProductCart}>
            <BsCartPlus size="2rem" />
          </button> 
          <button onClick={removeProductCart}>
            <BsCartDashFill size="2rem" />
          </button>
          <button onClick={toggleFavorite}>
            {isSave ? <BsFillHeartFill size="2rem" /> : <BsHeart size="2rem" />}
          </button>
        </div>
      </div>

      <div className="card-list">
        <p>Titre produit</p>
        <img src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
        <div className="btn-content">
          <button onClick={addProductCart}>
            <BsCartPlus size="2rem" />
          </button>
          <button onClick={removeProductCart}>
            <BsCartDashFill size="2rem" />
          </button>
          <button onClick={toggleFavorite}>
            {isSave ? <BsFillHeartFill size="2rem" /> : <BsHeart size="2rem" />}
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
