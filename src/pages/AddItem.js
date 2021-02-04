import React,{useState} from 'react';
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

const DropdownInputContainer = styled.div`
    min-width: 323px; 
    min-height: 39px; 
    background-color: #F6F6FB; 
    border-radius: 13px; 
    cursor: pointer;
    &:hover {
        background-color: #C7C7C7; 
        transition: 0.3s; 
    }

`; 

const DropdownContainer = styled.div`
    min-height: 133px; 
    min-width: 323px; 
    background-color: #F6F6FB;
    display:${props=>props.expanded ? "inline-flex" : "hidden"};
    height:${props=>props.expanded ? "auto" : "0px"};
    opacity:${props=>props.expanded ? 1 : 0};
    transition:opacity 0.5s;
    flex-direction:column;
    margin-top: 20px; 
    border-radius: 13px;
    & > div {
        padding: 10px 0px 10px 10px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
    }
`;

const AddItem = () => {
  
  const [expanded, setExpanded] = useState(false);

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
      <Slider></Slider>
      <AddButton></AddButton>
    </Container>


}

export default AddItem;