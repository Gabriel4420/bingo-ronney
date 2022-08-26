import styled from 'styled-components'

interface LabelProps {
  fontSize?: string
  color?: string
  bold?: boolean
}
export const Label = styled.label<LabelProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  padding: 2px;
  color: ${(props) => (props.color ? props.color : '#222')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`
