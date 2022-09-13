import * as S from './style'
import { FC } from 'react'
import Card from '../Card'

const DeskCards: FC = () => {
  return (
    <S.Background>
      <Card />
      <Card />
      <Card />
      <Card />
    </S.Background>
  )
}

export default DeskCards
