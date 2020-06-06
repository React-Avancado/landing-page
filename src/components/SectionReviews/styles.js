import styled, { css } from 'styled-components'

export const Content = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    .slick-list {
      margin: -1.2rem;
    }
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;

      li {
        background: white;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 12px;
        height: 12px;
        cursor: pointer;
      }
    }
  `}
`
