import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart} from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish} ) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();




    return (
        <div className="cartPic">
            <div className="picture">
              <img src={`./${dish.img}.jpg`} alt="dish" />
            </div>
            <div className="namePrice">
            <h2>{dish.name} </h2>
            <p>$ {dish.price} </p>
             
             <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
            </div>
         </div>
    )
}

export default Dish;