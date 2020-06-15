import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.large};

    ${media.greaterThan('large')`
      flex-direction: row;
      padding: ${theme.spacings.xlarge} ${theme.spacings.medium} 0;
    `}
  `}
`

export const IconsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    column-gap: ${theme.spacings.small};
    row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('small')`
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    `}

    ${media.greaterThan('medium')`
      column-gap: ${theme.spacings.xxlarge};
      row-gap: ${theme.spacings.large};
    `};
  `}
`

export const Icon = styled.div``

export const Icons = styled.img`
  width: 7rem;
  height: 7rem;
  transition: all 0.4s;

  ${media.greaterThan('medium')`
    width: 12.8rem;
    height: 12.8rem;
  `}
`

export const IconsName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
    `}
  `}
`
