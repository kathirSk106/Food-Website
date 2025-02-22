import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const ProductDetails = () => {
    let navigate= useNavigate()
    let handleNavigate =()=>{
        navigate("/")
    }
  return (
      <div>
        ProductDetails
        <button onClick={handleNavigate}>Move to Home</button>
        <Button variant=''>Hiii</Button>
        </div>
  )
}

export default ProductDetails