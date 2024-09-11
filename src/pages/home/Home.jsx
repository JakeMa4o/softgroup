// React
import { useState } from "react"

// Components
import Header from "../../components/header/Header"
import SecondMenu from "../../components/secondMenu/secondMenu"
import Content from "../../components/content/Content"
import Banner from "../../components/banner/Banner"

// Styles
import Styles from "./Home.module.css"

// Data 
import data from "../../data/data"


const Home = () => {
  const [cartItemCount, setCartItemsCount] = useState(0)
  const [cartIsOpen, setCartIsOpen] = useState(false)

  return (
    <div className={Styles.home}>
      <Header />
      <SecondMenu cartItemCount={cartItemCount} setCartIsOpen={setCartIsOpen}/>

      <Banner />

      <Content data={data} setCartItemsCount={setCartItemsCount} cartIsOpen={cartIsOpen}  setCartIsOpen={setCartIsOpen}/>
    </div>
  )
}

export default Home