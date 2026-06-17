import {useCart} from '../contexts/cart-context'
export const HorizontalProductCard = ({product})=>{
    const {cartDispatch}=useCart();
    const RemovefromCart=()=>{
         cartDispatch({
            type:"REMOVE_FROM_CART",
            payload:{id:product.id}
         })
    }
    return(
        <div className="card-horizontal d-flex shadow pt-10">
     <div className="card-hori-image-container relative">
          <img className="card-image" src={product.images?.[0]} alt="shoes"/>
          <small className="c-badge bg-primary absolute left-0">Trending</small>
     </div>
     <div className="card-details d-flex direction-column">
          <div className="card-title">{product.title}</div>
          <div className="card-description">
               <p className="card-price">Rs.{product.price}<span className="price-strike-through padding-all-8">Rs. 2499</span>
                  <span className="discount padding-all-8">(30% OFF)</span>
               </p>
          </div>
          <div className="quantity-container d-flex gap">
               <p className="q-title">Quantity: </p>
               <div className="count-container d-flex align-center gap">
                    <button className="count">-</button>
                    <span className="count-value">1</span>
                    <button className="count">+</button>
               </div>
          </div>
          <div className="cta-btn d-flex gap">
               <div  className="cta-btn">
                   <button onClick={RemovefromCart} className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                   Remove From Cart</button>
               </div>
               <div className="cta-btn">
                   <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                   Move to WishList</button>
                </div>
          </div>
     </div>
</div>
    )
}