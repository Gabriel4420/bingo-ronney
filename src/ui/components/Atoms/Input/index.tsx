import React, { HTMLInputTypeAttribute } from 'react'
import * as S from './style'

import { Label } from '@/ui'

interface InputProps {
  type: HTMLInputTypeAttribute | undefined
  tooltip: string
  placeholder?: string
  textLabel?: string
  labelActive?: boolean
  colorLabel?: string
  isBoldLabel?: boolean
  fontSizeLabel?: string
  radius?: string
}

const Input: React.FC<InputProps> = ({
  type,
  tooltip,
  placeholder,
  textLabel,
  labelActive,
  colorLabel,
  isBoldLabel,
  fontSizeLabel,
  radius
}: InputProps) => {
  return (
    <>
      {labelActive && (
        <Label
          content={textLabel ? textLabel : ''}
          bold={isBoldLabel}
          color={colorLabel}
          fontSize={fontSizeLabel}
        />
      )}
      <S.Input
        type={type}
        title={tooltip}
        placeholder={placeholder}
        radius={radius}
      />
    </>
  )
}

export default Input
