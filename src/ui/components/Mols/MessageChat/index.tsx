import { Ball, Heading, Avatar } from '@/ui'
import { FC } from 'react'

import * as S from './styles'

interface MsgProps {
  author: string
  message: string
  imageUrl: string
}

const MessageChat: FC<MsgProps> = ({ message, author, imageUrl }: MsgProps) => {
  return (
    <S.Background>
      <S.AvatarArea>
        <Avatar imageurl={imageUrl} width="50px" height="50px" />
      </S.AvatarArea>
      <S.TextArea>
        <Heading
          types="h5"
          content={`@${author}`}
          bold
          color="#fff"
          fontSize="14px"
        />
        <Heading types="p" content={message} color="#ffff" fontSize="12px" />
      </S.TextArea>
    </S.Background>
  )
}

export default MessageChat
