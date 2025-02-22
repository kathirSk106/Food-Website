import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ProductInformation as Info } from './ProductInformation';
import './ProductList.css'
import CardFooter from 'react-bootstrap/esm/CardFooter';
import CardText from 'react-bootstrap/esm/CardText';
const ProductList = () => {
   let [products, setProducts]= useState([] )
   useEffect(()=>{
       setProducts(Info)

   })

  return (
    <div>  <h1>Trending Product</h1>
            <section className='products'>
                {
                    products.map(products=>(
                        <Card className='product' style={{ width: '18rem' }}>
                            <center>
                 <Card.Img variant="top" src={products.image} style={{width:"9rem",height:"12rem"}}/>
                            </center>
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>
         {products.des}
        </Card.Text>
      </Card.Body>
      <CardFooter className='d-flex justify-evenly'>
        <CardText>{products.price}</CardText>
        <Button variant="primary">Add to Cart</Button>
      </CardFooter>
    </Card>
                    ))
                }
            </section>

    </div>
  )
}

export default ProductList