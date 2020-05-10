import React from 'react'
import { v4 } from 'uuid'
import { BoxingGlovesImage } from './graphql/BoxingGloves'
import { BoxingGlovesImageWhite } from './graphql/BoxingGlovesImageWhite'
import { BoxingGlovesImageWhitePart } from './graphql/BoxingGlovesImageWhitePart'
import { BoxingGlovesImageMindy } from './graphql/BoxingGlovesImageMindy'
import { BoxingGlovesImageShorts } from './graphql/BoxingGlovesImageShorts'
import { BoxingGlovesImageShortsToo } from './graphql/BoxingGlovesImageShortsToo'
import { SupportImage } from './graphql/SupportImage'

export const cards = [
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <BoxingGlovesImage
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <BoxingGlovesImageWhite
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <BoxingGlovesImageWhitePart
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <BoxingGlovesImageMindy
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <BoxingGlovesImageShorts
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <BoxingGlovesImageShortsToo
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
  {
    id: v4(),
    title: 'Здесь будет название товара',
    price: 8999,
    image: (
      <SupportImage
        className="shop-image"
        title="Здесь будет название товара"
        alt="Здесь будет название товара"
      />
    ),
  },
]
