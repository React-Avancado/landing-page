import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray};
    text-align: center;
    font-size: 1.3rem;
    line-height: ${theme.font.sizes.xlarge};
    position: relative;
    z-index: 2;
    padding-top: ${theme.spacings.medium};
    margin-top: -${theme.spacings.medium};
    padding-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      padding-top: ${theme.spacings.xxlarge};
      margin-top: -${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.xlarge};
    `}

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `}
`
