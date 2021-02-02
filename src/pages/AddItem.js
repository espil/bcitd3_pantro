import React from 'react';
import styled from 'styled-components';

import BrBut from 'comps/brbut';
import Input from '../comps/input';
import Bbut from '../comps/bbut';
import AddButton from '../comps/adbutton';

// import Slider from "../comps/Slider"
// import Dropdown from "../comps/Dropdown"

const Main = styled.div`
display:flex;
flex-direction:column;
align-item:center;
justify-content:center;
height:100vh;
width:auto;

& > .tit {

    font-family: Pier Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;

}
.name {
  
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.date {
  
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.amount {
  
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.shelf {
  
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.Storage {
  
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.bot {
  
}
`;

const AddItem = () => {

  return <Main>

    <BrBut />

    <div className="tit">
      Add an Item
    </div> &nbsp;
    <div className='name'>
      Item Name
      &nbsp;
    <Input></Input>
    </div>

    <div className='date'>
      Expiry Date (dd/mm/yyyy)
      &nbsp;
      
    <Input></Input>
    </div>
    <div className='amount'>
      Amount&nbsp;
      
    <Input></Input>
    </div>
    <div className='shelf'>
      Shelf&nbsp;
      
    <Input></Input>
 
    </div>

    <div className='storage'>
      Storage&nbsp;


    </div>
    <AddButton />
  </Main>
}


export default AddItem;