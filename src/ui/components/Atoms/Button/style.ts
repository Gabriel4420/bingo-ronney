import styled from 'styled-components'

interface ButtonProps {
  color?: string
  bgColor?: string
  behavior: string
}

export const Button = styled.button<ButtonProps>`
  color: ${({ color }) => (color ? color : 'purple')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'green')};
  border: 1px solid ${({ color }) => (color ? color : 'purple')};
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 11px;
  cursor: pointer;
`

export const ButtonLink = styled.a<ButtonProps>`
  color: ${({ color }) => (color ? color : 'purple')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'green')};
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`
