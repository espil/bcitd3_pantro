import React from 'react';
import styled from 'styled-components';

import restaurant from '../icons/restaurant.svg';


const Button = styled.div`
  position: absolute;
  width: 323px;
  height: 57px;
  background-color:#23b3f2;  
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 20px;
    height: 20px;
  }
`;


const AddButton = () => {

  return <Button>
    <img src={restaurant}/>&nbsp;Add Item
  </Button>


}




export default AddButton;
