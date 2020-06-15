import styled, { css } from 'styled-components'

export const Content = styled.section`
  ${({ theme }) => css`
    .slick-list,
    .slick-slider,
    .slick-track {
      position: relative;
      display: block;
    }

    .slick-loading .slick-slide,
    .slick-loading .slick-track {
      visibility: hidden;
    }

    .slick-slider {
      box-sizing: border-box;
      user-select: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }
    .slick-list {
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .slick-list:focus {
      outline: 0;
    }

    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }

    .slick-slider .slick-list,
    .slick-slider .slick-track {
      transform: translate3d(0, 0, 0);
    }

    .slick-track {
      top: 0;
      left: 0;
    }

    .slick-track:after,
    .slick-track:before {
      display: table;
      content: '';
    }

    .slick-track:after {
      clear: both;
    }

    .slick-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;
    }

    .slick-initialized .slick-slide {
      display: block;
    }

    .slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }

    .slick-arrow.slick-hidden {
      display: none;
    }

    .slick-list {
      margin: 0 -1.2rem;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

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
