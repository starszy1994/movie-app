import React from 'react'
import Button from '../Button/Button';
import * as Styled from "./styles";

const Newsletter = () => {
  return(
    <Styled.Wrapper>
    <Styled.Title>
        <h2>Zapisz się! Bądź na bieżąco!</h2>
        <p>Zostaw nam swojego maila, a dodamy go do bazy danych i będziesz informowany o wszystkich nowościach!</p>
    <Styled.Mail placeholder='           123email@gmail.com'/>
    <Button text={"Zapisz się!"}></Button>
    <Styled.Info>
        <label>Please enter a vaild email adress</label>
    </Styled.Info>
    </Styled.Title>
    </Styled.Wrapper>
    )
}

export default Newsletter;