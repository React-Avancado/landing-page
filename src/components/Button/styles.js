import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ButtonWrapper = styled.a`
  ${({ theme, wide }) => css`
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    padding: 1.3rem ${wide ? theme.spacings.medium : 0};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;

    ${media.greaterThan('medium')`
      padding: 1.3rem ${wide ? theme.spacings.large : 0};
    `}

    &:hover {
      background: ${theme.colors.primaryHover};
    }
  `}
`
