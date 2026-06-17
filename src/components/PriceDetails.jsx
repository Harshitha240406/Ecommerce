import {useCart} from '../contexts/cart-context';
import findTotalCartAmount from '../utils/findTotalCartAmount';
const PriceDetails=()=>{
    const {cart}=useCart();
    const totalCartAmount=findTotalCartAmount(cart);
    const deliveryCharge=49;
    return(
        <div className="w-[300px] bg-[#fafafa] pt-4">
            <p className="text-2xl border-b p-2">Price Details</p>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between border-b p-2">
                     <p>Prices ({cart.length}) items</p>
                     <p>{totalCartAmount}</p>
                </div>
                <div className="flex justify-between border-b p-2">
                    <p>Delivery Charge</p>
                    <p>{deliveryCharge}</p>
                </div>
                <div className="flex justify-between border-b p-2">
                    <p>Total Amount</p>
                    <p>{totalCartAmount+deliveryCharge}</p>
                </div>
                <div className="p-2">
                     <button className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                   PLACE ORDER</button>
                </div>
               
            </div>
        </div>
    )
}
export default PriceDetails;