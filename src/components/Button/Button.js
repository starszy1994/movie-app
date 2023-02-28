import React from 'react'
import * as Styled from "./styles";

const Button = ({text}) => {
  return (
    <Styled.Button>
    {text}
    </Styled.Button>
  );
};

export default Button;