import React, { useState } from 'react';
import styled from 'styled-components';
import BrBut from 'comps/BackButtonC';
import AddButton from 'comps/AddButton';
import Input from 'comps/Input';
import Dropdown from 'comps/Dropdown';
import { Link } from "react-router-dom";

const Container = styled.div`
display:flex;
flex-direction:column;
width: 323px;
height: 730px;
padding:26px;
.header {
    font-family: Pier Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin:52px 0px 26px 0px;
}
`;

const DropdownOption = styled.option`
    min-height: 133px; 
    max-width: 323px; 
    background-color: #F6F6FB;
    font-size: 16px;
    font-weight: bold;
    border-radius: 13px; 
    &:hover {
        background-color: #C7C7C7; 
        transition: 0.3s; 
    }
`;

const AddItem = () => {
  return <Container>
    <BrBut></BrBut>
    <div className="header">Add an Item</div>
    <Input header="Item Name" />
    <Input type="date" header="Expiry Date (dd/mm/yyyy)" />
    <Input header="Amount" />
    <Dropdown header="Shelf" />
    <Dropdown header="Storage" />
    <Link to="/">
      <AddButton></AddButton>
    </Link>
  </Container>
}

export default AddItem;