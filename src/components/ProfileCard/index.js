import React from 'react'
import PropTypes from 'prop-types'

import { GrGithub } from 'react-icons/gr'
import { FaBehance, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  behance: <FaBehance />
}

const ProfileCard = ({ name, role, image, socialLinks, description }) => (
  <S.Card key={name}>
    <S.Image src={image} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.link}>
          <a href={item.link} title={item.slug}>
            {icons[item.slug]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired,
  description: PropTypes.string.isRequired
}

export default ProfileCard
