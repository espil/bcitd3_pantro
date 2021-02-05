import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import rarrow from '../../icons/rarrow.svg';


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
  }    &:hover {
    transform: scale(1.2); 
    transition: 0.2s; 
}
`;


// function br(e) {
//   e.preventDefault();
//   alert('The link was clicked.');
// }

const BrBut = () => {

  return <Link to="/">
    <Button >
      <img src={rarrow} />
    </Button>
  </Link>
}




export default BrBut;
