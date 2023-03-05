import React from 'react'
import * as Styled from './BottomPage.style'

const BottomPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <ul>
        <h1>Contact</h1> <p>Tel: + 123 123 123</p> <p>Email: 123gmail@gmail.com</p> <p> 1 Enterprise Dr, Westcliffe, CO 81252, USA</p>
        </ul>
        <ul>
        <h1>Social media</h1> <p>Instragram</p> <p>Facebook</p> <p>Twitter</p>
        </ul>
        <ul>
        <h1>Productions</h1> <p>MovieStarMovie</p> <p>Telemagazine</p> <p>BBC News</p>
        </ul>
      </Styled.Title>
    </Styled.Wrapper>
  )
}

export default BottomPage
