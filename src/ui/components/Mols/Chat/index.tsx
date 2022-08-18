import React from 'react'
import { MessageChat } from '@/ui'
import * as S from './styles'

const Chat: React.FC = () => {
  return (
    <S.Background>
      <MessageChat message={'Ola'} author="seu_zé" />
    </S.Background>
  )
}

export default Chat
