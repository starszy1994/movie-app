import React from 'react'
import * as Styled from './BottomPage.style'
import {MdConnectWithoutContact} from 'react-icons/md'
import {MdMediation} from 'react-icons/md'
import {SiTele5} from 'react-icons/si'

const BottomPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        <ul>
        <h1> <MdConnectWithoutContact/>  Contact</h1> <p>Tel: + 123 123 123</p> <p>Email: 123gmail@gmail.com</p> <p> 1 Enterprise Dr, Westcliffe, CO 81252, USA</p>
        </ul>
        <ul>
        <h1> <MdMediation/>  Social media</h1> <p>Instragram</p> <p>Facebook</p> <p>Twitter</p>
        </ul>
        <ul>
        <h1><SiTele5/>  Productions</h1> <p>MovieStarMovie</p> <p>Telemagazine</p> <p>BBC News</p>
        </ul>
      </Styled.Title>
    </Styled.Wrapper>
  )
}

export default BottomPage
