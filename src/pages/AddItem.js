import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BrBut from 'comps/BackButtonC';
import AddButton from 'comps/AddButton';
import Input from 'comps/Input';
import { Link } from "react-router-dom";
import restaurant from '../icons/restaurant.svg';

import DatePicker from 'react-date-picker';

const items = require("../fakeDatabase.json");
const getItems = () => fetch(items).then(res => res.json());


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

const DropdownSelect = styled.select`
    width: 327px;
    height: 42px;
    background-color:#F6F6FB;  
    color: #000;
    font-size: 14px;
    cursor: pointer;
    border-radius:13px;
    border:none;
    padding:10px;
    font-family: Pier Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    border:none;
    padding-right: 16px;
    -webkit-box-sizing: border-box; 
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

const TopText = styled.p`
    color: black; 
    font-weight: bold; 
    margin-left: 0.5vw;
    user-select: none; 
`;

const AddItem = () => {

  const [items, setItems] = useState();

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  const [itemname] = useState([]);
  const [amount] = useState([]);
  const [shelf] = useState([]);
  const [storage] = useState([]);
  const [expiry, onChange] = useState(new Date());

  return <div>
    
    <Container>

    <BrBut></BrBut>
    <div className="header">Add an Item</div>
    <Input header="Item Name" />
    <DatePicker type="date" header="Expiry Date (dd/mm/yyyy)" value={expiry} />
    <Input header="Amount" />
    <TopText>Shelf</TopText>
    <DropdownSelect value={shelf}>
      <DropdownOption>None</DropdownOption>
      {items.map(o => <DropdownOption>{o.shelf}</DropdownOption>)}
    </DropdownSelect>
    <TopText>Storage</TopText>
    <DropdownSelect>
      <DropdownOption>None</DropdownOption>
      <DropdownOption>Fridge</DropdownOption>
      <DropdownOption>Freezer</DropdownOption>
      <DropdownOption>Pantry</DropdownOption>
    </DropdownSelect>
    <Link to="/">
      <AddButton image={restaurant}></AddButton>
    </Link>
  </Container>)

  </div>
  }

export default AddItem;