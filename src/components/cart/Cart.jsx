// React
import { useEffect, useState } from "react";

// React Icons
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

// Styles
import Styles from "./Cart.module.css";

const Cart = ({
  cartItems,
  setCartItems,
  setCartItemsCount,
  cartIsOpen,
  setCartIsOpen,
}) => {
  // Count notification for cart
  useEffect(() => {
    setCartItemsCount(cartItems.length);
  }, [cartItems]);

  const increaseQuantity = (code) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.code === code
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (code) => {
    setCartItems(
      cartItems
        .map((cartItem) =>
          cartItem.code === code
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className={`${Styles.cart} ${cartIsOpen ? Styles.open : ""}`}>
      <div className={Styles.closeBtn} onClick={() => setCartIsOpen(false)}>
        <IoMdClose />
      </div>

      {cartItems.map((cartItem) => (
        <div className={Styles.cartItem} key={cartItem.code}>
          <div className={Styles.img}>
            <img src={cartItem.img} alt="" />
          </div>
          <div className={Styles.cartInfo}>
            <h1>{cartItem.title}</h1>
            <p>Price: ${cartItem.price}</p>
            <p>Quantity: {cartItem.quantity}</p>
            <div className={Styles.buttons}>
              <button onClick={() => increaseQuantity(cartItem.code)}><IoMdArrowDropup /></button>
              <button onClick={() => decreaseQuantity(cartItem.code)}><IoMdArrowDropdown /></button>
            </div>
            <p>Total for this item: ${cartItem.price * cartItem.quantity}</p>
          </div>
        </div>
      ))}
      <div className={Styles.allProductsTotal}>
        <p>Total Amount: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
