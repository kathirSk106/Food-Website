import React from 'react'
import './Home.css'
import homeImg from "../assets/productImages/food.png"
import Foodproducts from './Foodproducts'
const Home = () => {
  return (
    <div>
     <div className="home">
    <div className='home-container'>
        <div className="home-text">
            <div className="home-data">
            <h3><i>Are You Hungry ?</i></h3>
          <h1>Don't <span>Wait !</span></h1>
          <h4>Let start to order food now</h4>
          <p>Welcome to the ultimate food delivery experience! Discover a wide variety of delicious meals from your favorite restaurants, all available at your fingertips. Satisfy your hunger in just a few taps — quick, easy, and always fresh!</p>
          <button className='order'>Order Now</button>
          <button className='menu'>View Menu</button>
            </div>
        </div>
        <div className="home-image">
          <img src={homeImg} alt="food image" />
        </div>
        
    </div>
    </div>
     <Foodproducts/>
    </div>
  )
}

export default Home