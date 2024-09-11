// React
import { useState } from "react";

// React Icons
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

// Styles
import Styles from "./SecondMenu.module.css";

const SecondMenu = ({cartItemCount, setCartIsOpen}) => {
  const [secondMenuIsOpen, setSecondMenuIsOpen] = useState(false);

  return (
    <div className={Styles.secondMenu}>
      <ul className={Styles.header}>
        <li
          className={Styles.catalog}
          onClick={() => setSecondMenuIsOpen(true)}
        >
          <span className={Styles.catalogIcon}>
            <PiSquaresFourLight />
          </span>
          Каталог <span className={Styles.hideMobile}>товаров</span>
        </li>
        <li className={Styles.search}>
          <div className={Styles.searchIcon}>
            <IoMdSearch />
          </div>
          <input type="text" placeholder="Поиск" />
        </li>
        <li className={Styles.phone}>
          <span className={Styles.hideMobile}>8 (727) 344-99-00</span>
          <div className={Styles.phoneIcon}>
            <MdLocalPhone />
          </div>
        </li>
        <li className={Styles.cart} onClick={() => setCartIsOpen(true)}>
          <MdOutlineShoppingCart />
          {cartItemCount !== 0 &&
            <div className={Styles.cartNotification}>
              {cartItemCount}
            </div>
          }
        </li>
      </ul>

      <div
        className={`${Styles.leftMenu} ${secondMenuIsOpen ? Styles.open : ""}`}
      >
        <div
          className={Styles.closeBtn}
          onClick={() => setSecondMenuIsOpen(false)}
        >
          <IoMdClose />
        </div>
        <ul>
          <li>POS системы</li>
          <li>Компьютер и комплектующие</li>
          <li>Сканер штрих-кода</li>
          <li>Принтеры чеков и этикеток</li>
          <li>Денежные ящики</li>
          <li>Весы электронные</li>
          <li>Терминалы сбора данных</li>
          <li>Счетчики и детекторы банкнот</li>
          <li>Антикражное оборудование</li>
        </ul>
      </div>

      <div className={`${Styles.overlay} ${!secondMenuIsOpen ? Styles.hide : ""}`}></div>
    </div>
  );
};

export default SecondMenu;
