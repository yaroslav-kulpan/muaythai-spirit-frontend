import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import classes from "./MuayThaiSpiritShop.module.scss"
import MuayTHaiShopCard from "../MuayThaiShopCard"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { settings } from "./slick-shop.setting"
import { cards } from "./cards"
import Container from '@material-ui/core/Container'

const MuyThaiSpiritShop = () => {
  const [data, setData] = useState()
  useEffect(() => {
    setData(cards)
  }, [])

  return (
    <section className={classes.shop}>
      <Container>
        <Slider {...settings}>
          {data &&
            data.map(item => <MuayTHaiShopCard card={item} key={item.id} />)}
        </Slider>
      </Container>
    </section>
  )
}

export default MuyThaiSpiritShop
