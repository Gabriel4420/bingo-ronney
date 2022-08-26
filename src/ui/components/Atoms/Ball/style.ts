import styled from 'styled-components'

interface BallProp {
  bgColor?: string
  height?: string
  width?: string
  internalheight?: string
  internalwidth?: string
}

export const Esphere = styled.div<BallProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => (props.width ? props.height : '50px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  border-radius: 50%;
  background: ${(props) =>
    props.bgColor
      ? props.bgColor
      : 'radial-gradient(50% 50% at 50% 50%, #5EBD4F 0%, #36732C 100%)'};
  margin: 10px;
`

export const Inside = styled.div<BallProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f5f5f5;
  color: #000;
  width: ${(props) => (props.internalwidth ? props.internalwidth : '35px')};
  height: ${(props) => (props.internalheight ? props.internalheight : '35px')};
  border-radius: 50%;
  font-size: 2rem;
  font-weight: bold;
`
