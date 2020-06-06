import React from 'react'

import * as S from './styles'
import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

const profiles = [
  {
    name: 'Willian Justen',
    role: 'Instrutor',
    image: `https://source.unsplash.com/400x400/?profile,face&${Math.random()}`,
    description:
      'Desenvolvedor Front-end há mais de 10 anos, tendo trabalhado em grandes empresas como Toptal, Globo.com e Huge. Tenho um blog com mais de 200 mil views por mês, além de ter diversos cursos na Udemy, alcançando a incrível marca de mais de 195 mil alunos!',
    socialLinks: [
      { slug: 'twitter', link: 'https://twitter.com/1' },
      { slug: 'github', link: 'https://github.com/willianjusten' }
    ]
  },
  {
    name: 'Guilherme Louro',
    role: 'Instrutor',
    image: `https://source.unsplash.com/400x400/?profile,face&${Math.random()}`,
    description:
      'Desenvolvedor Fullstack há muitos anos, com conhecimento em diversas linguagens de programação, tendo Python como sua grande paixão. Já trabalhou e liderou grandes projetos e trabalha atualmente na Personare, um dos maiores portais de autoconhecimento e bem-estar no Brasil. Nas horas vagas ele ainda é o criador e mantenedor do Netfla, site de notícias do Flamengo com mais de meio milhão de views por mês!',
    socialLinks: [
      { slug: 'twitter', link: 'https://twitter.com/1' },
      { slug: 'github', link: 'https://github.com/2' }
    ]
  },
  {
    name: 'Marcos Oliveira',
    role: 'Designer',
    image: `https://source.unsplash.com/400x400/?profile,face&${Math.random()}`,
    description:
      'Front-End e UI Designer há alguns anos. Atualmente trabalha na Lukin Co. Já participou de diversos tipos de projetos, na área da saúde, streaming e varejo. Sempre dividido entre design e programação. No tempo livre sempre está envolvido com a comunidade, organizando eventos e meetups.',
    socialLinks: [
      { slug: 'twitter', link: 'https://twitter.com/1' },
      { slug: 'behance', link: 'https://behance.com/2' }
    ]
  }
]

const SectionAboutUs = () => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>Quem somos nós?</Heading>

      <S.Content>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            role={profile.role}
            image={profile.image}
            socialLinks={profile.socialLinks}
            description={profile.description}
          />
        ))}
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionAboutUs
