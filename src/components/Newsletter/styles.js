import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.small};
    text-align: center;
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
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xsmall};
      border-radius: ${theme.border.radius};
      padding: 1.4rem;
      background: #ececec;
      width: 100%;

      &:focus {
        outline-color: ${theme.colors.primary};
      }
    }

    button[type='submit'] {
      font-family: ${theme.font.family};
      cursor: pointer;
      background: ${theme.colors.primary};
      border-radius: ${theme.border.radius};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      transition: background 0.3s ease;
      padding: 1.2rem;

      &:hover {
        background: ${theme.colors.primaryHover};
      }

      &:focus {
        outline-color: ${theme.colors.primaryHover};
      }
    }
  `}
`

export const Label = styled.label`
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
`

export const Thanks = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xsmall};
    text-align: center;
  `}
`
