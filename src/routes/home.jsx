import React from 'react'
import { PageContainer } from '../styles/commons.styles'
import Hero from '../components/Hero'

import heroImg from '../assets/Hero.webp'
import conectividadImg from '../assets/conectividad.png'
import seguridadImg from '../assets/camara.webp'
import domoticaImg from '../assets/domotica.webp'

const Home = () => {
  return (
    <PageContainer>
      <Hero
        title='BulkTech'
        description='Especialistas en brindar soluciones tecnológicas modernas a hogares e industrias, ya sea en conectividad a internet en lugares remotos, sistema de seguridad o automatización.'
        link='/nosotros'
        img={heroImg}
        altImage='An antena and a smartphone'
      />
      <Hero
        title='Conectividad'
        description='Soluciones de conectividad a internet en lugares remotos, con facilidades para implementar conexión comunitaria para reducir costos.'
        link='/conectividad'
        img={conectividadImg}
        altImage='A wifi simbol with person on center'
        dark
        imgFirst
        marginTop
      />
      <Hero
        title='Seguridad'
        description='Sistemas de vigilancia CCTV adaptables según necesidad e implementación de diferentes tecnologías de seguridad, como reconocimiento facial e inteligencia artificial.'
        link='/seguridad'
        img={seguridadImg}
        altImage='Dome camara'
        dark
        marginTop
      />
      <Hero
        title='Domótica'
        description='También ofrecemos soluciones de domótica para automatizar el hogar y hacer la vida más cómoda y sencilla. Nuestros sistemas de IoT son fáciles de usar y se integran perfectamente en cualquier hogar.'
        link='/domotica'
        img={domoticaImg}
        altImage='A smarthouse schematic'
      />
    </PageContainer>
  )
}

export default Home
