import styled, { css } from 'styled-components'

const wrapperModifiers = {
  defaultColor: (theme) => css`
    color: ${theme.colors.black};
  `,

  reverseColor: (theme) => css`
    color: ${theme.colors.white};
  `,

  lineLeft: (theme) => css`
    border-left: 7px solid ${theme.colors.secondary};
  `,

  lineBottom: (theme) => css`
    padding-left: 0;
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      content: ' ';
      border-bottom: 5px solid ${theme.colors.primary};
      width: 5rem;
      position: absolute;
      left: 0;
      bottom: -1rem;
    }
  `
}

export const Wrapper = styled.h2`
  ${({ theme, reverseColor, lineBottom }) => css`
    padding-left: 1rem;
    font-size: ${theme.font.sizes.large};

    ${!reverseColor && wrapperModifiers.defaultColor(theme)};
    ${reverseColor && wrapperModifiers.reverseColor(theme)};

    ${lineBottom && wrapperModifiers.lineBottom(theme)};
    ${!lineBottom && wrapperModifiers.lineLeft(theme)};
  `}
`
