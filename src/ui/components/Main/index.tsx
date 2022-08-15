import React from 'react'
import LogoSVG from 'assets/svg/LogoSVG'
import * as S from './styles'

interface Props {
  title: string
  description: string
}

const Main: React.FC<Props> = ({
  title = 'Next.js Pro - Boilerplate',
  description = 'A ready to production Next.js boilerplate'
}: Props) => (
  <S.Wrapper>
    <S.Logo>
      <LogoSVG />
    </S.Logo>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
