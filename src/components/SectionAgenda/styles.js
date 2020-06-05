import styled, { css } from 'styled-components'

export const Text = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
