import styled from 'styled-components'

const Star = styled.div`
  cursor:pointer;
  display: inline-block;
  right: 5px;
  position: absolute;
  margin-left: auto;
  top: 5px;
  &::after {
    content: '⭐';
    font-size: 25px;
    filter: ${props => props.active ? '' : 'grayscale(100%)'}
  }
`

export default Star
