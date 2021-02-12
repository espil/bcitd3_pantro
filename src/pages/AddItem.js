import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BrBut from 'comps/BackButtonC';
import AddButton from 'comps/AddButton';
import Input from 'comps/Input';
import { Link } from "react-router-dom";
import axios from 'axios';
import restaurant from '../icons/restaurant.svg';
import DatePicker from 'react-date-picker';

const content = require("../fakeDatabase.json");

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

  const HandleFormComplete = (name, amount, shelf, storage, expiry) => {
    console.log(name, amount, shelf, storage, expiry);

    var resp = axios.post("https://pantro-db.herokuapp.com/api/Items", {name:name, amount:amount, shelf:shelf, storage:storage, expiry:expiry});
    console.log("create", resp);
  }
  
  const [items, setItems] = useState(null);

  const name= useState(null);
  const amount = useState(null);
  const [shelf, setShelf] = useState(null);
  const [storage, setStorage] = useState(null);
  const [expiry, setExpiry] = useState(new Date());

  const GetItems = async () => {
    var resp = await axios.get("https://pantro-db.herokuapp.com/api/Items");
    console.log(resp);

    //update
    setItems(resp.data);
  }

  useEffect(() => {

    GetItems();
  }, []);


  return <div>
    <form onSubmit={HandleFormComplete}>
    <Container>

    <BrBut></BrBut>
    <div className="header">Add an Item</div>
    <Input type="text" header="Item Name" value={name}/>
    <Input type="text" header="Amount" value={amount}/>
    <TopText>Expiry Date</TopText>
    <DatePicker
        onChange={setExpiry}
        value={expiry}
      />
    <TopText>Shelf</TopText>
    <DropdownSelect onChange={setShelf}>
      {content.map(o => <DropdownOption value={shelf}>{o.shelf}</DropdownOption>)}
    </DropdownSelect>
    <TopText>Storage</TopText>
    <DropdownSelect onChange={setStorage}>
      <DropdownOption value="Fridge">Fridge</DropdownOption>
      <DropdownOption value="Freezer">Freezer</DropdownOption>
      <DropdownOption value="Pantry">Pantry</DropdownOption>
    </DropdownSelect>
    <Link to="/">
      <AddButton image={restaurant} value="Submit" onClick={()=>{
        HandleFormComplete()
      }}></AddButton>
    </Link>
  </Container>
  </form>
  </div>
  }

export default AddItem;