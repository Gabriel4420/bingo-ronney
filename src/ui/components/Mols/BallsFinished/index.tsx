import React from 'react'
import Ball from '../../Atoms/Ball'
import * as S from './styles'

const BallsFinished: React.FC = () => {
  const x = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]
  return (
    <S.Background>
      <S.BallsArea>
        {x.map((item, index) => (
          <Ball key={index} number={item.toString()} />
        ))}
      </S.BallsArea>
    </S.Background>
  )
}

export default BallsFinished
