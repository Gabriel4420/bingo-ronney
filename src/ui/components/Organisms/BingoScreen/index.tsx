import { CenterArea, Chat, TopArea, FooterArea } from '@/ui'

import * as S from './style'

const BingoScreen = () => {
  return (
    <>
      <S.Background>
        <TopArea />
        <CenterArea />
        <FooterArea />
      </S.Background>

      <Chat />
    </>
  )
}

export default BingoScreen
