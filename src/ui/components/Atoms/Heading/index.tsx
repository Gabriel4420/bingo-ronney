import React from 'react'
import * as S from './styles'

interface HeadingProps {
  types: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  content: string
  bold?: boolean
  color?: string
  fontSize?: string
}

const Heading: React.FC<HeadingProps> = ({
  types,
  content,
  bold,
  color,
  fontSize
}: HeadingProps) => {
  switch (types) {
    case 'h1':
      return (
        <S.Background>
          <S.text1 bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.text1>
        </S.Background>
      )
      break
    case 'h2':
      return (
        <S.Background>
          <S.text2 bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.text2>
        </S.Background>
      )
      break
    case 'h3':
      return (
        <S.Background>
          <S.text3 bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.text3>
        </S.Background>
      )
      break
    case 'h4':
      return (
        <S.Background>
          <S.text4 bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.text4>
        </S.Background>
      )
      break
    case 'h5':
      return (
        <S.Background>
          <S.text5 bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.text5>
        </S.Background>
      )
      break
    case 'h6':
      return (
        <S.Background>
          <S.text6 bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.text6>
        </S.Background>
      )
      break
    case 'p':
      return (
        <S.Background>
          <S.paragraph bold={bold} color={color} fontSize={fontSize}>
            {content}
          </S.paragraph>
        </S.Background>
      )
      break
    default:
      return <p>{content}</p>
      break
  }
}

export default Heading
