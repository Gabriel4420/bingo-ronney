import React from 'react'
import * as S from './styles'

interface HeadingProps {
  types: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  content: string
  bold?: boolean
}

const Heading: React.FC<HeadingProps> = ({
  types,
  content,
  bold
}: HeadingProps) => {
  switch (types) {
    case 'h1':
      return (
        <S.Background bold={bold}>
          <h1>{content}</h1>
        </S.Background>
      )
      break
    case 'h2':
      return (
        <S.Background bold={bold}>
          <h2>{content}</h2>
        </S.Background>
      )
      break
    case 'h3':
      return (
        <S.Background bold={bold}>
          <h3>{content}</h3>
        </S.Background>
      )
      break
    case 'h4':
      return (
        <S.Background bold={bold}>
          <h4>{content}</h4>
        </S.Background>
      )
      break
    case 'h5':
      return (
        <S.Background bold={bold}>
          <h5>{content}</h5>
        </S.Background>
      )
      break
    case 'h6':
      return (
        <S.Background bold={bold}>
          <h6>{content}</h6>
        </S.Background>
      )
      break
    case 'p':
      return (
        <S.Background bold={bold}>
          <p>{content}</p>
        </S.Background>
      )
      break
    default:
      return <p>{content}</p>
      break
  }
}

export default Heading
