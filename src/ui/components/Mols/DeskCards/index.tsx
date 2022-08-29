import * as S from './style'
import { FC } from 'react'
import Card from '../Card'

const DeskCards: FC = () => {
  return (
    <S.Background>
      <Card number={3} />
    </S.Background>
  )
}

export default DeskCards
