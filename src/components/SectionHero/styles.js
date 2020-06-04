import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} auto;
      padding: 0 ${theme.spacings.medium};
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem auto 5rem;

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

    ${media.greaterThan('medium')`
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3.8rem;
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: min(${theme.font.sizes.xxlarge}, 5vw);
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
