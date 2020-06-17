import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;

  ${media.greaterThan('medium')`
    text-align: left;
    margin: auto;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.6rem auto 0;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 15rem auto;
  `}
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    margin: auto;

    ${media.greaterThan('medium')`
      margin: initial;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: min(${theme.font.sizes.xxlarge}, 5vw);
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 400;

    ${media.greaterThan('medium')`
      font-size: min(${theme.font.sizes.xlarge}, 3vw);
      line-height: min(5rem, 4.5vw);
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: ${theme.spacings.medium};
    margin: 0 auto;

    ${media.greaterThan('medium')`
      margin: 0;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto;
    width: min(34rem, 100%);

    ${media.greaterThan('medium')`
      margin: 0;
      width: 42rem;
    `}
  `}
`
