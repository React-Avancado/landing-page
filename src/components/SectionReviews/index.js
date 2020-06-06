import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import * as S from './styles'

const reviews = [
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'Sensacional! A didática do instrutor é excelente para estruturar o curso e dar ritmo das aulas. Foi uma experiência muito enriquecedora (e divertida) construir um blog seguindo passo-a-passo dos vídeos. Não sabia nada sobre Gatsby, GraphQL ou Netlify CMS mas consegui acompanhar todo o processo sem grandes dificuldades, além disso foi ótimo aprender um pouquinho mais sobre algumas práticas de desenvolvimento, como temas em React, estilização CSS in JS com styled-components e utilização do Algolia como solução de busca. Recomendo! =)'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  },
  {
    name: 'Karoline Medeiros',
    image: `https://source.unsplash.com/60x60/?profile,face&${Math.random()}`,
    description:
      'A didática é ótima, professor sabe o que fala e como passar a informação da melhor maneira possível. Acabei consumindo +60% do curso no dia em que comprei, depois que comecei foi difícil parar rsrs nota mil!'
  }
]

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = () => (
  <Container>
    <Heading reverseColor>Junte-se a mais de 200 mil alunos</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, image, description }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={image}
            description={description}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
