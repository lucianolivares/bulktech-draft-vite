import React from 'react'
import { PageContainer } from '../styles/commons.styles'
import Hero from '../components/Hero'
import Conectividad from '../components/Conectividad'
import Seguridad from '../components/Seguridad'
import Domotica from '../components/Domotica'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Conectividad />
      <Seguridad />
      <Domotica />
      <Footer />
    </PageContainer>
  )
}

export default Home
