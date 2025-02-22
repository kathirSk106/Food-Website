import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CardFooter from 'react-bootstrap/esm/CardFooter';
import CardText from 'react-bootstrap/esm/CardText'
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap'
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import './FoodProducts.css'
import FoodImg from "../assets/productImages/one.png"
const Foodproducts = () => {
    let productDetails=[
        {
            image:FoodImg,
            title:"hoakd",
            info:'jhassa asjvasvk jkasvjs', 
            price:12  
        },
        {
            image:FoodImg,
            title:'Food',
            info:'ka ka aka kan',   
            price:45
        },
        {
            image:FoodImg,
            title:"hoakd",
            info:'jhassa asjvasvk jkasvjs', 
            price:12  
        },
        {
            image:FoodImg,
            title:'Food',
            info:'ka ka aka kan',   
            price:45
        },
        {
            image:FoodImg,
            title:"hoakd",
            info:'jhassa asjvasvk jkasvjs', 
            price:12  
        },
        {
            image:FoodImg,
            title:'Food',
            info:'ka ka aka kan',   
            price:45
        },
        {
            image:FoodImg,
            title:"hoakd",
            info:'jhassa asjvasvk jkasvjs', 
            price:12  
        },
        {
            image:FoodImg,
            title:'Food',
            info:'ka ka aka kan',   
            price:45
        }
    ]
  return (
    <div>
         <h1 align='center'>Trending <span>Recipies</span></h1>
        <Container className='food-products'>
                {
                    productDetails.map((product)=>(
                        <Card className='product-card'  style={{ width: '15rem',backgroundColor:"white" }}>
                            <center>
              <Card.Img className='product-img' variant='top' src={product.image} style={{width:"9rem",height:"12rem"}} />

              <Card.Body >
               <Card.Title className='card-title'>
                        {product.title}
               </Card.Title>
               <Card.Text className='card-info'>{product.info}</Card.Text>
              </Card.Body>
                            </center>
              <CardFooter className='card-btm'>
              <CardText className='price'>${product.price}</CardText>
              <button variant="primary">
                <IoCartOutline 
                style={{background:"none",
                    fontSize:"18px",
                    marginRight:"5px"
                }}/>Add to Cart</button>
      </CardFooter>
            </Card>
                    ))
                }
        </Container>
    </div>
  )
}

export default Foodproducts