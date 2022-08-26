import styled from 'styled-components'

interface Props {
  bold?: boolean
  color?: string
  fontSize?: string
}

export const Background = styled.div<Props>``

export const text1 = styled.h1<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '26px')};
  color: ${(props) => (props.color ? props.color : '#222')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
export const text2 = styled.h2<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '24px')};
  color: ${(props) => (props.color ? props.color : '#222')} !important;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
export const text3 = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '22px')};
  color: ${(props) => (props.color ? props.color : '#222')} !important;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
export const text4 = styled.h4<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  color: ${(props) => (props.color ? props.color : '#222')} !important;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
export const text5 = styled.h5<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.color : '#222')} !important;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
export const text6 = styled.h6<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  color: ${(props) => (props.color ? props.color : '#222')} !important;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

export const paragraph = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  color: ${(props) => (props.color ? props.color : '#222')} !important;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
