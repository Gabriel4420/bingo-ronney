import { FC, useState } from 'react'

import * as S from './style'

interface CardProps {
  number: number
}

const Card: FC<CardProps> = ({ number }: CardProps) => {
  const [isMarked, setIsMarked] = useState(Array<boolean>)

  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50]

  return (
    <S.Table>
      {x.map((item, key) => {
        return (
          <S.CardBackground
            isClick={isMarked[key]}
            onClick={() => setIsMarked(isMarked)}
            key={key}
          >
            <S.CardInternal isClick={isMarked[key]}>{item}</S.CardInternal>
          </S.CardBackground>
        )
      })}
    </S.Table>
  )
}

export default Card
