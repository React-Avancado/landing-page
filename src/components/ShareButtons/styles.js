import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.small};

    svg {
      color: ${theme.colors.primary};
      width: 4rem;
      height: 4rem;
      margin: 0 1rem;
      transition: color 0.3s;
    }

    a:hover {
      svg {
        color: ${theme.colors.primaryHover};
      }
    }
  `}
`
