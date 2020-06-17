import styled, { css } from 'styled-components'

export const Card = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.xsmall};
    border-radius: ${theme.border.radius};
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    border-left: 6px solid ${theme.colors.primary};
    padding-left: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
  `}
`

export const SubTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: normal;
    color: ${theme.colors.gray};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    p + p {
      margin-top: ${theme.spacings.small};
    }
  `}
`
