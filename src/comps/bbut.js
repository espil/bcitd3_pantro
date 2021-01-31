import React from 'react';
import styled from 'styled-components';

import arrow from '../icons/arrow.svg';


const Button = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  background-color:#fff;  
  cursor: pointer;
  border-radius:18px;
  box-shadow: 6px 6px 6px grey;
  shadowOpacity: 0.8;
  shadow-offset: {width: 0, height: 2};
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 20px;
    height: 16.58px;
  }
`;


const Bbut = () => {

  return <Button>
    <img src={arrow}/>
  </Button>


}




export default Bbut;
