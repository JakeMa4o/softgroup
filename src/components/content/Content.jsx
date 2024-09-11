// React
import { useState } from "react";

// Components
import Cart from "../cart/Cart";

// Styles
import Styles from "./Content.module.css";

const Content = ({ data, setCartItemsCount, cartIsOpen, setCartIsOpen }) => {
  const [category, setCategory] = useState("lowest-first");
  const [cartItems, setCartItems] = useState([]);

  // Выбор Категории
  const chooseCategory = (e) => {
    setCategory(e.target.value);
  };

  const sortedData = [...data].sort((a, b) => {
    switch (category) {
      case "lowest-first":
        return parseInt(a.price) - parseInt(b.price);
      case "highest-first":
        return parseInt(b.price) - parseInt(a.price);
      case "code":
        return a.code.localeCompare(b.code);
      case "name":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // // Добавление в корзину
  const addToCart = (e) => {
    const itemCode = e.target.id;
    const itemToAdd = data.find((item) => item.code === itemCode);

    if (itemToAdd) {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.code === itemCode
      );

      if (existingCartItem) {
        // Increase the quantity if the item is already in the cart
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.code === itemCode
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      } else {
        // Add new item with quantity 1 if it's not in the cart
        setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]);
      }
    }
  };

  return (
    <div className={Styles.content}>
      {/* Cart PopUp */}
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        setCartItemsCount={setCartItemsCount}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
      />

      <div className={Styles.categorySelector}>
        <label htmlFor="category-select">Сортировать</label>

        <select name="category" id="category-select" onChange={chooseCategory}>
          <option value="lowest-first">По возростанию цены</option>
          <option value="highest-first">По убыванию цены</option>
          <option value="code">По коду</option>
          <option value="name">По имени</option>
        </select>
      </div>

      {/* Main Products */}
      {sortedData.map((item) => (
        <div key={item.code} className={Styles.contentItem}>
          <div className={Styles.img}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={Styles.info}>
            <h3>{item.title}</h3>
            <p>{item.price} тг</p>
            <p>Code: {item.code}</p>
            <button id={item.code} onClick={addToCart}>
              В корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
