import styled from 'styled-components'

interface Props {
  bold?: boolean
  color?: string
}

export const Background = styled.div<Props>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 5px;
    color: ${(props) => (props.color ? props.color : '#3333')};
  }

  h1 {
    font-size: 26px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }

  h2 {
    font-size: 24px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }

  h3 {
    font-size: 22px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }

  h4 {
    font-size: 18px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }

  h5 {
    font-size: 16px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }

  h6 {
    font-size: 14px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  }
`
