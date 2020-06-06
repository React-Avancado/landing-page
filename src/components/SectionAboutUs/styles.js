import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr;
    margin-top: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`
