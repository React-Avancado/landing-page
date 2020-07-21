import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} alt={photo.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
