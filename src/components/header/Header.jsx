// React
import { useState } from "react";

// Icons
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

// Styles
import Styles from "./Header.module.css"

const Header = () => {

  const [rightMenuIsOpen, setRightMenuIsOpen] = useState(false)

  return (
    <div className={Styles.header}>

      <div className={Styles.logo}>
        <div className={Styles.highLight}>Soft</div>
        Gr
        <div className={Styles.logoImg}>
          <img src="/assets/softgroup-logo.webp" alt="softgroup" />
        </div>
        up
      </div>

      <div className={Styles.hamburger} onClick={() => setRightMenuIsOpen(true)}>
        <IoMenuOutline />
      </div>


      <div className={`${Styles.rightMenu} ${rightMenuIsOpen ? Styles.open : ""}`}>
        <div className={Styles.closeBtn} onClick={() => setRightMenuIsOpen(false)}>
          <IoMdClose />
        </div>
        <ul>
          <li>
            <span className={Styles.locationIcon}>
              <IoLocationSharp />
            </span>
            <span className={Styles.locationName}>
              Алматы
            </span>
          </li>
          <li>Главная</li>
          <li>Оборудование</li>
          <li>Программы</li>
          <li>Авторизаиця</li>
          <li>Отзывы</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>

      <div className={`${Styles.overlay} ${!rightMenuIsOpen ? Styles.hide : ""}`}></div>

    </div>
  );
};

export default Header
