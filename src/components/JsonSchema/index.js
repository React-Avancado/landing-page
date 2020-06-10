import React from 'react'
import { CourseJsonLd, ProductJsonLd } from 'next-seo'

const JsonSchema = () => (
  <>
    <CourseJsonLd
      courseName="React Avançado"
      providerName="Willian Justen Cursos"
      providerUrl="https://reactavancado.com.br/"
      description="Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
    />
    <ProductJsonLd
      productName="Curso React Avançado"
      images={['https://reactavancado.com.br/img/cover.png']}
      description="Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
      brand="Willian Justen Cursos"
      reviews={[
        {
          author: {
            type: 'Person',
            name: 'Henrique Albert Schmaiske'
          },
          datePublished: '2020-03-06T12:37:40Z',
          reviewBody:
            'O Curso foi incrível! Gostei muito das explicações, bem claras e objetivas! Deixo a sugestão para um próximo Curso: NextJS mostrando fazer um Ecommerce. Compraria sem nem olhar o preço.',
          name: 'Didática perfeita',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1'
          },
          publisher: {
            type: 'Person',
            name: 'Henrique Albert Schmaiske'
          }
        }
      ]}
      aggregateRating={{
        ratingValue: '4.8',
        reviewCount: '27659'
      }}
      offers={[
        {
          price: '289.95',
          priceCurrency: 'BRL',
          priceValidUntil: '2020-07-05',
          url: 'https://reactavancado.com.br/',
          availability: 'https://schema.org/InStock',
          seller: {
            name: 'Willian Justen Cursos'
          }
        },
        {
          price: '579.99',
          priceCurrency: 'BRL',
          priceValidUntil: '2021-07-05',
          url: 'https://reactavancado.com.br/',
          availability: 'https://schema.org/InStock',
          seller: {
            name: 'Willian Justen Cursos'
          }
        }
      ]}
      mpn="reactavancado"
      sku="reactavancado"
    />
  </>
)

export default JsonSchema
