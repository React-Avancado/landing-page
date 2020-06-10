import styled, { css } from 'styled-components'

export const Card = styled.article`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Image = styled.picture`
  ${({ theme }) => css`
    img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: 100%;
      margin: auto;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Role = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.texts};
  `}
`
