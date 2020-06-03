import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 0.4rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    padding: 1.8rem;
    text-decoration: none;
    text-align: center;
  `}
`
