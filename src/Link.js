import React from 'react'
import styled from 'styled-components'

// Link URL
const Url = styled.a`
  font-size: 24px;
  color: #1d4877;
  font-family: 'Trebuchet Ms', Verdana;
  text-decoration: none;
  color:inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`

// Link Text
const Text = styled.div`
  font-size: 14px;
  margin: 10px 0;
`

// The tag pills
const Tag = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 2px 10px;
  border-radius:3px;
  margin: 5px;
  background: #fbb021;
  border:1px solid #f68838;
  cursor:pointer;

  &:first-of-type {
    margin-left: 0;
  }

  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.7
  }
`

const simplify = url => url.replace(/https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, '')

// Link block
const Link = ({ className, url, text, tags, onTagClick }) => (
  <div className={className}>
    <Url title={url} href={url}>{ simplify(url) }</Url>
    <Text>{ text }</Text>
    { tags.map(tag => <Tag onClick={() => onTagClick(tag)} key={tag}>{ tag }</Tag>) }
  </div>
)

// when given a React component, styled method adds props.className to it
const StyledLink = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  width: calc(50% - 22px);
  border: 1px solid #f68838;
  margin: 10px;
  padding: 20px;
  vertical-align: top;

  &:nth-child(even) {
    background: #fffcf5;
  }

  &:nth-child(odd) {
    background: #fff6e9;
  }

  @media screen and (max-width: 640px) {
    width: calc(100% - 22px);
  }

  @media screen and (min-width: 1024px) {
    width: calc(33% - 22px);
  }
`

export default StyledLink
