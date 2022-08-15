import React from 'react'

import * as S from './style'

interface ButtonProps {
  title: string
  color?: string
  bgColor?: string
  type: 'button' | 'submit' | 'reset'
  behavior: 'link' | 'action'
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  bgColor,
  type,
  behavior
}: ButtonProps) => {
  return (
    <>
      {behavior === 'action' ? (
        <S.Button
          behavior={behavior}
          type={type}
          bgColor={bgColor}
          color={color}
        >
          {title}
        </S.Button>
      ) : (
        <S.ButtonLink
          behavior={behavior}
          type={type}
          bgColor={bgColor}
          color={color}
        >
          {title}
        </S.ButtonLink>
      )}
    </>
  )
}

export default Button
