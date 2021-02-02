import React from 'react';
import styled from 'styled-components';

import rarrow from '../icons/rarrow.svg';


const Button = styled.div`
  position: absolute;
  top:26px;
  left:26px;
  width:24px;
  height:24px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 24px;
    height: 20.58px;
  }
  .iconpath path{
    stroke: #FF7750;
  }
`;


const BrBut = () => {

  return <Button>
    <img src={rarrow} />
  </Button>


}




export default BrBut;
