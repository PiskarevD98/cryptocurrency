import { Link } from "react-router-dom"
import { IProduct } from "../models"



interface ProductProps {
  product: IProduct
  
}

function Product({product}:ProductProps) {
  const price =  parseFloat(product.priceUsd)
  
  
  return (
    <div > 
    <Link to={`/cryptocurrency/${product.id}`} className='product' > 
    <p className="product_name">{product.id}</p>
    <p className="product_price">{price.toFixed(5)} $</p> 
    </Link>
    </div>
  )
}

export default Product


