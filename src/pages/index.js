import React from 'react'

import Layout from '../components/layout'
import Header from '../home/components/Header'
import SEO from '../components/seo'
import SpiritTab from '../home/components/SpiritTab'
import MuyThaiSpiritShop from '../home/components/MuayThaiShop'
import AboutSays from '../home/components/AboutSays'
import Advantages from '../home/components/Advantages'
import AboutTeam from '../home/components/AboutTeam'
import Faq from '../home/components/FAQ'
import AboutSpirit from '../home/components/AboutSpirit'
import ThankYouPage from '../components/thank-you-page'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="спирит" description="Муай Тай Спирит" lang="ru-UA"/>
      <ThankYouPage />
      <Header />
      <Advantages />
      <AboutSpirit />
      <AboutTeam />
      <SpiritTab />
      <Faq />
      <AboutSays />
      <MuyThaiSpiritShop />
    </Layout>
  )
}

export default IndexPage
