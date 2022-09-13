import { FC } from 'react'

import { table1 } from '../../../../data/values.json'

import * as S from './style'

const Card = () => {
  return (
    <>
      <S.Table>
        <div className="cartela">
          <h2 className="cartela-titulo">BINGO </h2>
          <div className="cartela-corpo">
            <div className="cartela-linha">
              {table1.number.map((item: number, index: number) => (
                <div className="cartela-casa" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </S.Table>
    </>
  )
}

export default Card
