import React from 'react'
import { Input, MessageChat } from '@/ui'
import * as S from './styles'

const Chat: React.FC = () => {
  const url =
    'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/61/22/20208787.jpg'
  return (
    <S.Background>
      <MessageChat message={'Ola'} author="seu_zé" imageUrl={url} />
      <Input
        type="text"
        tooltip="Lugar aonde se insere uma mensagem de texto"
        placeholder="Digite sua mensagem"
        radius="30px"
      />
    </S.Background>
  )
}

export default Chat
