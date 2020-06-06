import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const ReviewCard = ({ id, name, image, description }) => (
  <S.Card>
    <S.User>
      <S.Image src={image} />
      <S.Name>{name}</S.Name>
    </S.User>
    <S.Text>
      <input type="checkbox" id={`review-${id}`} />
      <p>{description}</p>
      <label htmlFor={`review-${id}`}>Ver tudo</label>
    </S.Text>
  </S.Card>
)

ReviewCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ReviewCard
