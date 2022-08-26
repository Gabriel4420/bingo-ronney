import { BallsFinished, SessionStatus, Chat, Ball, Heading } from '@/ui'
import * as S from './style'
const BingoScreen = () => {
  return (
    <>
      <S.Background>
        <BallsFinished />
        <SessionStatus />
        <S.BallContentArea>
          <Heading
            types={'h1'}
            content={'20:00'}
            bold
            color="#333"
            fontSize="40px"
          />
          <Ball
            number="10"
            height="150px"
            width="150px"
            internalwidth="90px"
            internalheight="90px"
          />
        </S.BallContentArea>
      </S.Background>
      <div style={{ backgroundColor: '#e3e3e3' }}>
        <Chat />
      </div>
    </>
  )
}

export default BingoScreen
