import styled from 'styled-components'

interface CardInternal {
  isClick: boolean
}

export const Table = styled.main`
  display: flex;
  padding: 10px;

  .cartela {
    display: flex;
    flex-direction: column;
    margin: 5px;
    border: 3px solid white;
    max-width: 15vw;
    max-height: 14.5vw;
    width: 35vw;
    height: 24.5vw;
    vertical-align: top;
  }

  h2.cartela-titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vw;
    max-height: 5vw;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
    line-height: 5vw;
    text-transform: uppercase;

    color: white;
  }

  .cartela-corpo {
    margin: 0;
  }

  .cartela-linha {
    display: flex;
    flex-wrap: wrap;

    height: calc(2.2vw - 2px);

    color: white;
  }

  .cartela-casa {
    max-width: 100%;
    width: 33%;
    height: 100%;
    max-height: 100%;
    border-collapse: separate;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid white;
    font-size: 15px;
    font-weight: bold;
    line-height: 2px;

    margin: 0 auto;
  }
`

export const CardBackground = styled.div<CardInternal>`
  display: grid;
  grid-template-columns:repeat(4,1fr)
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  width: 2%;
  height: 20px;
  font-size: 25px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px #333;
  cursor: pointer;
`
export const CardInternal = styled.div<CardInternal>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  width: 100%;
  height: 30px;
  padding: 15px;
  font-size: 25px;
  border: ${(props) =>
    props.isClick ? '2px solid green' : '2px solid #b1b1b1'};
  border-radius: 10px;
`
