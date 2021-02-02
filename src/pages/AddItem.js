import React from 'react';
import styled from 'styled-components';
import BrBut from 'comps/brbut';
import AddButton from 'comps/adbutton';
import Slider from 'comps/Slider';
import Input from 'comps/input';
import Dropdown from 'comps/Dropdown';

const Container = styled.div`

  display:flex;
  flex-direction:column;
  width:323px;
  height:812px;
  padding:26px;
  justify-content: center;
  align-items: center;

  .header{
    position: absolute;
    width: 146px;
    height: 22px;
    left: 26px;
    top: 101px;
    
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
    left: 26px;
    
    font-family: Pier Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    
}
  .unit(
    position
  )
`;

const AddItem = () => {


    return <Container>

      <BrBut></BrBut>
      <div className="header">Add an Item</div>
      <div>
      <div className="sub">Item Name</div>
      <Input></Input>
      </div>
      {/* <div className="sub">Expirty Date (dd/mm/yyyy) </div>
      <Dropdown></Dropdown>
      <div className="sub">Amount </div> */}
      <Dropdown></Dropdown>
      <div className="sub">Shelf </div>
      <Dropdown></Dropdown>
      <div className="sub">Storage </div>
      <Slider></Slider>

      <AddButton></AddButton>

    </Container>


}

export default AddItem;