import './App.css'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"
import Products from './components/Products'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}>
         <Route index element={<ProductList/> }/>
         <Route path='list' element={<ProductList/>}/>
         <Route path='details' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
