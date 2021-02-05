import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import arrow from '../icons/arrow.svg';


const Button = styled.div`
  position: absolute;
  top:26px;
  left:26px;
  width: 36px;
  height: 36px;
  background-color:#fff;  
  cursor: pointer;
  border-radius:18px;
  box-shadow: 0px 7px 7px 3px rgba(0, 0, 0, 0.25);
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


// function b(e) {
//   e.preventDefault();
//   alert('The link was clicked.');
// }

const Bbut = () => {


  return <Link to="/">
    <Button>
      <img src={arrow} />
    </Button>
  </Link >


}



export default Bbut;
