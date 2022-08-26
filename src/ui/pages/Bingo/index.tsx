import { BingoScreen } from '@/ui'
import React from 'react'
import * as S from './styles'

const Bingo: React.FC = () => {
  return (
    <>
      <S.BackgroundMain>
        <BingoScreen />
      </S.BackgroundMain>
    </>
  )
}

export default Bingo
