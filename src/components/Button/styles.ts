import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type Props = {
  wide: boolean
  withPrice: boolean
}

const buttonModifiers = {
  withPrice: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};
  `,
  wide: (theme: DefaultTheme) => css`
    padding: 1.3rem ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: 1.3rem ${theme.spacings.large};
    `}
  `
}

export const ButtonWrapper = styled.a<Props>`
  ${({ theme, wide, withPrice }) => css`
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${theme.colors.primaryHover};
    }

    ${wide && buttonModifiers.wide(theme)};
    ${withPrice && buttonModifiers.withPrice(theme)};
  `}
`
