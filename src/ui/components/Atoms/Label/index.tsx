import React from 'react'

import * as S from './style'

interface LabelProps {
  content: string
  fontSize?: string
  color?: string
  bold?: boolean
}

const Label: React.FC<LabelProps> = ({
  content,
  fontSize,
  color,
  bold
}: LabelProps) => {
  return (
    <S.Label fontSize={fontSize} color={color} bold={bold}>
      {content}
    </S.Label>
  )
}

export default Label
