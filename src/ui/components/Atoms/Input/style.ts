import styled from 'styled-components'

interface props {
  radius?: string
}

export const Input = styled.input<props>`
  padding: 10px;
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  border: none;
  outline: none;
`
