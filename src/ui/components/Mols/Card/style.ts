import styled from 'styled-components'

interface CardInternal {
  isClick: boolean
}

export const Table = styled.main`
  display: flex;
  padding: 10px;
`

export const CardBackground = styled.div<CardInternal>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  width: 5%;
  height: 50px;
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
