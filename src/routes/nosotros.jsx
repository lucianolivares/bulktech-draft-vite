import React from 'react'
import { LargeWidth, PageContainer, RevertTitle, Title } from '../styles/commons.styles'
import Hero from '../components/Hero'

import nosotrosUno from '../assets/nosotros-1.svg'
import nosotrosDos from '../assets/nosotros-2.png'
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
      <LargeWidth dark marginTop>
        <div className='flex leftside'>
          <div>
            <Title>Misión</Title>
            <p>Brindar tecnología en cualquier lugar, para hacer tu vida más simple.</p>
          </div>
          <div>
            <RevertTitle>Visión</RevertTitle>
            <p>Ayudar a las personas y negocios a optimizar su procesos con ayuda de la tecnología, permitiéndoles alcanzar su máximo potencial.</p>
          </div>
        </div>
        <div className='flex rightside'>
          <img src={nosotrosDos} />

        </div>

      </LargeWidth>
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
