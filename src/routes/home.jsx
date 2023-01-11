import React from 'react'
import { PageContainer } from '../styles/commons.styles'
import Hero from '../components/Hero'
import Conectividad from '../components/Conectividad'
import Seguridad from '../components/Seguridad'
import Domotica from '../components/Domotica'

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Conectividad />
      <Seguridad />
      <Domotica />
    </PageContainer>
  )
}

export default Home
