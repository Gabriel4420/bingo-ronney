import React from 'react'
import * as S from './style'

interface AvatarProps {
  width: string
  height: string
  border?: string
  imageurl: string
}

const Avatar: React.FC<AvatarProps> = ({
  width,
  height,
  border,
  imageurl
}: AvatarProps) => {
  return (
    <S.Image src={imageurl} width={width} height={height} border={border} />
  )
}

export default Avatar
