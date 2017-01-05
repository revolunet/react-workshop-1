import styled from 'styled-components'
import md5 from 'md5'

// return unique screenshot url
const getScreenshotUrl = url => `/screenshots/${md5(url)}.png`

const Screenshot = styled.div`
  width: 160px;
  height: 120px;
  margin: 0 auto;
  background-image: ${props => `url(${getScreenshotUrl(props.url)})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #aaa;
  border: 1px solid #ccc;
  margin-bottom:10px;
`

export default Screenshot
