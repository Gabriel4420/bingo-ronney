import React from 'react'

import * as S from './style'

interface BallProp {
  number: string
  bgColor?: string
  height?: string
  width?: string
  internalheight?: string
  internalwidth?: string
}

const Ball: React.FC<BallProp> = ({
  number,
  bgColor,
  height,
  width,
  internalheight,
  internalwidth
}: BallProp) => {
  return (
    <S.Esphere bgColor={bgColor} height={height} width={width}>
      <S.Inside internalheight={internalheight} internalwidth={internalwidth}>
        {number}
      </S.Inside>
    </S.Esphere>
  )
}

export default Ball
