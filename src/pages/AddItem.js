import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import BrBut from 'comps/BackButtonC';
import AddButton from 'comps/AddButton';
import Input from 'comps/Input';
import { Link } from 'react-router-dom';

import axios from 'axios';
import restaurant from '../icons/restaurant.svg';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:323px;
  hegith:730px;
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
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [shelf, setShelf] = useState();
  const [storage, setStorage] = useState();
  const [expiry, setExpiry] = useState();

  const HandleFormComplete = async () => {
    var resp = await axios.post("https://pantro-db.herokuapp.com/api/items", {
      name: name,
      amount: amount,
      expiry: expiry,
      shelf: shelf,
      storage: storage
    });
    // console.log(resp);

    //update
    setItems(resp.data);
  }

  useEffect(() => {

    HandleFormComplete();
    
    console.log("handlefromcomplete", name, amount, shelf, storage, expiry);
  }, []);

  return <div>
  <Container>
    <BrBut></BrBut>

  <form>
    <div className="header">Add an Item</div>
    <Input type="text" header="Item Name" onChange={(e) => {
      setName(e.target.value);
    }} />

    <Input type="text" header="Amount" onChange={(e) => {
      setAmount(e.target.value);
    }} />

    <Input type="text" header="Expiry Date" onChange={(e) => {
      setExpiry(e.target.value);
    }} />

    <TopText>Shelf</TopText>
    <DropdownSelect onChange={(e)=>{
      setShelf(e.target.value);}}>
        <DropdownOption value="Produce">Produce</DropdownOption>
        <DropdownOption value="Dairy">Dairy</DropdownOption>
        <DropdownOption value="Seafood">Seafood</DropdownOption>        
      </DropdownSelect>

    <TopText>Storage</TopText>
    <DropdownSelect onChange={(e)=>{
      setStorage(e.target.value);}}>
          <DropdownOption value="Fridge">Fridge</DropdownOption>
          <DropdownOption value="Freezer">Freezer</DropdownOption>
          <DropdownOption value="Pantry">Pantry</DropdownOption>
        </DropdownSelect>
    

    <Link to="/">
    <AddButton image={restaurant} value="Submit" onClick={HandleFormComplete({ name, amount, shelf, storage, expiry })}></AddButton>
    </Link>
  </form>
  </Container>
</div>
}

export default AddItem;