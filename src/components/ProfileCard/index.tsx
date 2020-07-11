import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type socialNetwork = {
  slug: string
  link: string
}

type Props = {
  name: string
  role: string
  image: string
  socialNetwork: socialNetwork[]
  description: string
}

const ProfileCard = ({
  name,
  role,
  image,
  socialNetwork,
  description
}: Props) => (
  <S.Card key={name}>
    <S.Image>
      <img src={getImageUrl(image)} loading="lazy" alt={name} />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialNetwork.map((item) => (
        <S.Link key={item.link}>
          <a href={item.link} title={item.slug}>
            {icons[item.slug]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description dangerouslySetInnerHTML={{ __html: description }} />
  </S.Card>
)

export default ProfileCard
