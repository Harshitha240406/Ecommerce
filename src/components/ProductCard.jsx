import { useCart } from '../contexts/cart-context.jsx';
import {findProductInCart} from '../utils/findProductInCart.js'
import {useNavigate} from 'react-router-dom'
const ProductCard=({product})=>{
    const {cart,cartDispatch}=useCart();
    const navigate=useNavigate();
    const isProductInCart=findProductInCart(cart,product.id);
    const onCartClick=(product)=>{
        !isProductInCart?
          cartDispatch(
            {
                type:"ADD_TO_CART",
                payload:{product}
            }
          ):navigate('/cart')
          
    }
    return(
        <div className="card card-vertical d-flex direction-column relative shadow">
     <div className="card-image-container">
          <img className="card-image" src={product.images?.[0]} alt="shoes"/>
     </div>
     <div className="card-details">
          <div className="card-title">{product.title}</div>
          <div className="card-description"> 
               <p className="card-price">
                  Rs.{product.price}
               </p>
          </div>
          <div className="cta-btn">
                 <button className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                   <span class="material-symbols-outlined text-5xl hover:cursor-pointer">
                favorite
                </span>
                 Add To WishList
               </button>
               <button onClick={()=>onCartClick(product)}className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                  <span className="material-symbols-outlined text-5xl hover:cursor-pointer">
                    {
                       isProductInCart ?'shopping_cart_checkout': 'shopping_cart'
                    }
                  </span>
                   {
                        isProductInCart ?'Go To Cart':'Add To Cart'
                   }
               </button>
          </div>
     </div>
</div>
    )
}
export default ProductCard;