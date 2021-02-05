import React, { useState } from 'react';
import styled from 'styled-components';
import BrBut from 'comps/BackButtonC';
import AddButton from 'comps/AddButton';
import Input from 'comps/Input';
import Dropdown from 'comps/Dropdown';
import { Link } from "react-router-dom";
import DatePicker from 'react-date-picker';
const items = require("../fakeDatabase.json");



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

const AddItem = () => {
  const [value, onChange] = useState(new Date());
  return <Container>
    <Link to="/Home"><BrBut></BrBut></Link>
    <div className="header">Add an Item</div>
    <Input header="Item Name" />
    <div className="sub">Expiry Date (dd/mm/yyyy)</div>
    <DatePicker        
    onChange={onChange}
    value={value}/>
    <Input header="Amount" />
    <Dropdown header="Shelf" />
    <Dropdown header="Storage" />
    <Link to="/">
      <AddButton></AddButton>
    </Link>
  </Container>
}

export default AddItem;