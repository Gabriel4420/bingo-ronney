import { CenterArea, Chat, TopArea } from '@/ui'
import * as S from './style'

const BingoScreen = () => {
  return (
    <>
      <S.Background>
        <TopArea />
        <CenterArea />
      </S.Background>
      <div style={{ backgroundColor: '#e3e3e3' }}>
        <Chat />
      </div>
    </>
  )
}

export default BingoScreen
