import * as S from './style'
import { Ball, Heading } from '@/ui'

const CenterArea = () => {
  return (
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
        fontSize="3rem"
      />
    </S.BallContentArea>
  )
}

export default CenterArea
