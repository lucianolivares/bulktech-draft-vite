import React from 'react'
import { PageContainer, Title } from '../styles/commons.styles'
import Hero from '../components/Hero'
import Conectividad from '../components/Conectividad'

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Conectividad />
      <Hero />

      <Hero />

      <Title>Pagina web en desarrollo ⚒️👷‍♂️</Title>
    </PageContainer>
  )
}

export default Home
