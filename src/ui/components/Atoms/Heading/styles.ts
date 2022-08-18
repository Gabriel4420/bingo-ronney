import styled from 'styled-components'

interface Props {
  bold?: boolean
  color?: string
  fontSize?: string
}

export const Background = styled.div<Props>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 1px;
    color: ${({ color }) => (color ? color : '#222')} !important;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }
`

export const text1 = styled.h1<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '26px')};
`
export const text2 = styled.h2<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '24px')};
`
export const text3 = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '22px')};
`
export const text4 = styled.h4<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
`
export const text5 = styled.h5<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
`
export const text6 = styled.h6<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
`
