import React from 'react'
import * as S from './styles'
import { Heading } from '@/ui'

const SessionStatus: React.FC = () => {
  return (
    <S.Background>
      <Heading types="h1" content="Bingo do josé" bold color="white" />
      <Heading types="h4" content="Sessão Iniciada" bold color="#0df30d" />
    </S.Background>
  )
}

export default SessionStatus
