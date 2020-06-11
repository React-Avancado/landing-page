import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'

import * as S from './styles'

const ReviewCard = ({ id, name, image, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    // eslint-disable-next-line
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <source
            srcSet={require(`@images/reviews/${image}?webp`)}
            type="image/webp"
          />
          <source
            srcSet={require(`@images/reviews/${image}`)}
            type="image/jpg"
          />
          <img
            src={require(`@images/reviews/${image}`)}
            loading="lazy"
            alt={name}
          />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

ReviewCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ReviewCard
