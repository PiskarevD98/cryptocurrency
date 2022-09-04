import { useProduct } from "../hooks/hook";
import Product  from "../components/Product";


function MainPages() {
    const {products} = useProduct()
    

    return (
        
      <div className="" >
        <h1 className="header">Price for 1 unit of cryptocurrency</h1>
        <div>
       { products.map(product => <Product product={product} key={product.id} /> ) }
       
       </div>
      </div>
      
    );
}

export default MainPages