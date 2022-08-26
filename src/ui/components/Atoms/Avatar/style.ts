import styled from 'styled-components'

interface ImageProps {
  border?: string
}

export const Image = styled.img<ImageProps>`
  border-radius: 50%;
  border: ${(props) => (props.border ? props.border : '3px solid black')};
  margin-right: 10px;
  object-fit: cover;
  margin-top: 10px;

  &:hover {
    border: ${(props) => (props.border ? props.border : '3px solid green')};
  }
`

export const Status = styled.div`
  width: 10px;
  height: 10px;
  background-color: green;
  border: 1px solid black;
  border-radius: 50%;
  float: left;
  position: relative;
  top: -15px;
  left: 40px;
`
