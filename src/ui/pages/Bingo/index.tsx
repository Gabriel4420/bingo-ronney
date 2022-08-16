import BallsFinished from '@/ui/components/Mols/BallsFinished'
import React from 'react'
import * as S from './styles'

const Bingo: React.FC = () => {
  return (
    <S.Background>
      <BallsFinished></BallsFinished>
    </S.Background>
  )
}

export default Bingo
