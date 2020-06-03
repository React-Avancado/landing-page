import styled, { css } from 'styled-components'

export const HeadingWrapper = styled.h2`
  ${({ theme, color }) => css`
    border-left: 7px solid ${theme.colors.secondary};
    padding-left: 1rem;
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.large};
  `}
`
