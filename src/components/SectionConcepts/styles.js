import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Box = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};

    ${media.greaterThan('small')`
      padding: ${theme.spacings.large};
    `}
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.small} 0;

    ${media.greaterThan('small')`
      column-count: 2;
    `}

    ${media.greaterThan('70rem')`
      column-count: 3;
    `}
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    position: relative;
    list-style: none;
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
