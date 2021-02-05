import React, { useState } from 'react';
import styled from 'styled-components';
import BrBut from 'comps/brbut';
import AddButton from 'comps/adbutton';
import ChoiceSlider from 'comps/Slider';
import Input from 'comps/input';
import Dropdown from 'comps/Dropdown';

import { Link } from "react-router-dom";

const Container = styled.div`

  display:flex;
  flex-direction:column;
  width:323px;
  height:812px;
  margin: 0px 26px 26px 26px;
  font-family: Pier Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  & > .header {
    width: 146px;
    margin-top: 51px;
    
    font-family: Pier Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    
    color: #000000;
}
  .sub{

    width: 81px;
    height: 19px;
    margin-top: 19px;
    margin-bottom: 7px;
    
    font-family: Pier Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    
}
`;

const AddItem = () => {


  return <Container>
    <BrBut></BrBut>
    <div className="header">Add an Item</div>
    <div className="sub">Item Name</div>
    <Input></Input>
    <div className="sub">Expiry Date </div>
    <Input></Input>
    <div className="sub">Amount </div>
    <Input></Input>
    <Dropdown></Dropdown>
    <div className="sub">Storage </div>
    <ChoiceSlider></ChoiceSlider>
    <AddButton></AddButton>
  </Container>


}

export default AddItem;