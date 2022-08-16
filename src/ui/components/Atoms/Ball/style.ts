import styled from 'styled-components'

interface BallProp {
  bgColor?: string
}

export const Esphere = styled.div<BallProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) =>
    props.color
      ? props.color
      : 'radial-gradient(50% 50% at 50% 50%, #5EBD4F 0%, #36732C 100%)'};
  margin: 10px;
`

export const Inside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5f5f5;
  color: #000;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
`
