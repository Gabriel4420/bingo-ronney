import styled from 'styled-components'

interface ImageProps {
  border?: string
}

export const Image = styled.img<ImageProps>`
  border-radius: 50%;
  border: ${(props) => (props.border ? props.border : '1px solid black')};
  margin-right: 10px;
  object-fit: cover;
`
