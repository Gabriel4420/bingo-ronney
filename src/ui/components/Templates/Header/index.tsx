import React from 'react'
import { Button } from '@/ui/components/Atoms'
import * as S from './Style'

const Header: React.FC = () => {
  return (
    <S.Background>
      <div>
        <S.Logo src="./img/Bingo-2.png" />
      </div>
      <S.ButtonArea>
        <Button
          title="Entrar"
          type="button"
          behavior="link"
          bgColor="#532568"
          color="#f5f5f5"
        />
        <Button
          title="Cadastrar"
          type="button"
          behavior="action"
          bgColor="#5E0E5A"
          color="#f5f5f5"
        />
      </S.ButtonArea>
    </S.Background>
  )
}

export default Header
