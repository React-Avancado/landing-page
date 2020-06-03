import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeroWrapper = styled.header`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.small};
    max-width: ${theme.container};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 58rem;
`

export const HeroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 3.8rem;
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const HeroDescription = styled.h2`
  font-size: 2.2rem;
  line-height: 3rem;
  font-weight: 400;

  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      line-height: 5rem;
    `}
  `}
`

export const HeroImage = styled.img`
  width: 34rem;

  ${media.greaterThan('medium')`
    width: 42rem;
  `}

  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto;
  `}
`
