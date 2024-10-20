import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, food_list, removefromCart, getTotalCartItem } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total </p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>
                    <FaIndianRupeeSign />
                    {item.price}
                  </p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    className="delete"
                    onClick={() => removefromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>
                <FaIndianRupeeSign />
                {getTotalCartItem()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fees</p>
              <p>
                <FaIndianRupeeSign />
                {getTotalCartItem() === 0 ? 0 : 20}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                <FaIndianRupeeSign />
                {getTotalCartItem() === 0 ? 0 : getTotalCartItem() + 2}
              </b>
            </div>
          </div>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              alert("Thanks for Your Order");
            }}
          >
            Payment
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>Please Enter Your promo-code</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="PROMO CODE" />
              <button className="btn btn-outline-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
