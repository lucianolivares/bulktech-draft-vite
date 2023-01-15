import React from 'react'
import { PageContainer } from '../styles/commons.styles'
import Hero from '../components/Hero'

import nosotrosUno from '../assets/nosotros-1.svg'
import nosotrosDos from '../assets/nosotros-2.svg'
import nosotrosTres from '../assets/nosotros-3.svg'
import nosotrosCuatro from '../assets/nosotros-4.svg'

const Nosotros = () => {
  return (
    <PageContainer>
      <Hero
        title='Un Gusto Conocerte'
        description='Estamos ubicados en la región de Coquimbo, somos un equipo enfocado en brindar soluciones tecnológicas practicas que aporten un beneficio a nuestros clientes. Siempre apuntamos a hacer las cosas un poco diferente en BulkTech, desde el comienzo hemos puesto foco en lo simple y sustentable.'
        img={nosotrosUno}
        altImage='A person connecting a laptop to a server'
      />
      <Hero
        title='Misión'
        description='Brindar tecnología en cualquier lugar, para hacer tu vida más simple.'
        img={nosotrosDos}
        altImage='A person browser internet'
        dark
        marginTop
      />
      <Hero
        title='Visión'
        description='Ayudar a las personas y negocios a optimizar su procesos con ayuda de la tecnología, permitiéndoles alcanzar su máximo potencial.'
        img={nosotrosTres}
        altImage='A person browser internet'
        dark
      />
      <Hero
        title='Mantenerse Actualizado'
        description='Nos esforzamos para mantenernos a la vanguardia de las últimas tecnologías y poder brindar soluciones innovadoras que ayuden a nuestros clientes a conectarse y aprovechas al máximo las oportunidades que ofrece la tecnología.'
        img={nosotrosCuatro}
        altImage='A person browser internet'
      />
    </PageContainer>
  )
}

export default Nosotros
