import styled, { css } from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

export const ButtonWrapper = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 0.4rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    padding: 1.3rem ${({ wide }) => (wide ? '3rem' : '0')};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;

    ${media.greaterThan('medium')`
      padding: 1.3rem ${({ wide }) => (wide ? '6rem' : '0')};
    `}

    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }
  `}
`
