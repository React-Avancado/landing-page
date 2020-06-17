import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.img`
  width: 22rem;

  ${media.greaterThan('medium')`
    width: 24.5rem;
  `}
`
