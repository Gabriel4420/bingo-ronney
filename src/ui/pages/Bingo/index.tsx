import { BallsFinished, SessionStatus, Chat } from '@/ui'

import React from 'react'
import * as S from './styles'

const Bingo: React.FC = () => {
  return (
    <S.Background>
      <BallsFinished />
      <SessionStatus />
      <Chat />
    </S.Background>
  )
}

export default Bingo
