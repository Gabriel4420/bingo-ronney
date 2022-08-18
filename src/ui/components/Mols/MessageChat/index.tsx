import { Ball, Heading } from '@/ui'
import { FC } from 'react'

import * as S from './styles'

interface MsgProps {
  author: string
  message: string
}

const MessageChat: FC<MsgProps> = ({ message, author }: MsgProps) => {
  return (
    <S.Background>
      <S.AvatarArea>
        <Ball number={'2'} />
      </S.AvatarArea>
      <S.TextArea>
        <Heading
          types="h2"
          content={`@${author}`}
          bold
          color="#fff"
          fontSize="12px"
        />
        <Heading types="p" content={message} color="#ffff" fontSize="8px" />
      </S.TextArea>
    </S.Background>
  )
}

export default MessageChat
