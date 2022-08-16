import React from 'react'

import * as S from './style'

interface BallProp {
  number: string
  bgColor?: string
}

const Ball: React.FC<BallProp> = ({ number, bgColor }: BallProp) => {
  return (
    <S.Esphere bgColor={bgColor}>
      <S.Inside>{number}</S.Inside>
    </S.Esphere>
  )
}

export default Ball
