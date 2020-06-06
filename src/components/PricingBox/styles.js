import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Box = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0;
    background: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.large} auto ${theme.spacings.xlarge};

    ${media.greaterThan('720px')`
      max-width: 72rem;
      padding: ${theme.spacings.large} ${theme.spacings.xxlarge};
      border-radius: ${theme.border.radius};
    `}
  `}
`

export const Ribbon = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    position: absolute;
    top: ${theme.spacings.small};
    right: -1.5rem;

    &::after {
      content: '';
      position: absolute;
      background: #2e8379;
      top: 42.5px;
      right: 0;
      width: 1.5rem;
      height: 1rem;
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }

    ${media.lessThan('720px')`
      display: none;
    `}
  `}
`

export const Prices = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('720px')`
      margin-bottom: ${theme.spacings.large};
    `}
  `}
`

export const FullPrice = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    font-weight: 400;
    text-decoration: line-through;
    margin-right: ${theme.spacings.medium};
  `}
`

export const DiscountPrice = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const BenefitsList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin-bottom: ${theme.spacings.large};
  `}
`

export const BenefitsItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    position: relative;
    padding-left: ${theme.spacings.small};

    &::after {
      content: ' ';
      position: absolute;
      width: 0.9rem;
      height: 0.9rem;
      top: 0.9rem;
      left: 0rem;
      border-radius: 100%;
      background: ${theme.colors.secondary};
    }

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const ButtonFullPrice = styled.span`
  ${({ theme }) => css`
    text-decoration: line-through;
    opacity: 0.7;
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const ButtonDiscountPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`
