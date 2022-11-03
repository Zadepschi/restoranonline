import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, changeQuantity } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish} ) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    const items = useSelector(getCartItems);
    const productInCart = items.some(item => item.id === dish.id)

   const handleBuy = () => {
  if(!productInCart) {
    dispatch(addItemToCart(dish))
  } else {
    dispatch(changeQuantity(dish.id))
  }
}



    return (
        <div className="cartPic">
            <div className="picture">
              <img src={`./${dish.img}.jpg`} alt="dish" />
            </div>
            <div className="namePrice">
            <h2>{dish.name} </h2>
            <p>$ {dish.price} </p>
             
             <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={handleBuy}>Add to cart</button>
            </div>
         </div>
    )
}

export default Dish;