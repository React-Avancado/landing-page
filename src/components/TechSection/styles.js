import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const TechSectionWrapper = styled.section`
  ${({ theme }) => css`
    padding-top: 12rem;
    padding-bottom: 12rem;

    ${media.greaterThan('large')`
      flex-direction: row;
      padding: 12rem ${theme.spacings.medium};
    `}
  `}
`

export const TechIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TechIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 6.2rem;
  text-align: center;
  margin: 1.5rem;

  ${media.greaterThan('medium')`
    margin: 5rem;
    flex: 1 1 12.8rem;
  `}
`

export const TechIcons = styled.img`
  width: 6.2rem;
  height: 6.2rem;

  ${media.greaterThan('medium')`
    width: 12.8rem;
    height: 12.8rem;
  `}
`

export const TechIconsName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};;
    `}
  `}
`
