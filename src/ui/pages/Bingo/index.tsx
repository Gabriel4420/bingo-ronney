import { BallsFinished, SessionStatus } from '@/ui'
import React from 'react'
import * as S from './styles'

const Bingo: React.FC = () => {
  return (
    <S.Background>
      <BallsFinished />
      <SessionStatus />
    </S.Background>
  )
}

export default Bingo
