import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      grid-template-columns: 2fr 1fr;
    `}

    input[type='email'] {
      border: 1px solid ${theme.colors.gray};
      border-radius: ${theme.border.radius};
      padding: 1.2rem;

      &:focus {
        outline-color: ${theme.colors.primary};
      }
    }

    input[type='submit'] {
      cursor: pointer;
      background: ${theme.colors.primary};
      border-radius: ${theme.border.radius};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
      transition: background 0.3s ease;
      padding: 1.2rem;

      &:hover {
        background: ${theme.colors.primaryHover};
      }
    }
  `}
`

export const Thanks = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xsmall};
    text-align: center;
  `}
`
