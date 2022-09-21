import { useState } from 'react'
import data from '../../../../data/values.json'

import * as S from './style'

const Card = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <S.Table isClick={click}>
        <div className="cartela">
          <h2 className="cartela-titulo">BINGO </h2>
          <div className="cartela-corpo">
            <div className="cartela-linha" onClick={() => setClick(!click)}>
              {data.table1.numbers.map((item: any, index: number) => (
                <S.CardHome
                  key={index}
                  id={`card${index}`}
                  isClick={click}
                  color={item.color}
                  onClick={() =>
                    document
                      .querySelector(`#card${index}`)
                      ?.classList.add('active')
                  }
                >
                  {item.n}
                </S.CardHome>
              ))}
            </div>
          </div>
        </div>
      </S.Table>
    </>
  )
}

export default Card
