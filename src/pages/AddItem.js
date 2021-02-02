import React from 'react';
import styled from 'styled-components';

import BrBut from 'comps/brbut';
import Input from '../comps/input';
import Bbut from '../comps/bbut';
import AddButton from '../comps/adbutton';

// import Slider from "../comps/Slider"
// import Dropdown from "../comps/Dropdown"

const Main = styled.div`
display: flex;
flex-direction: column;
min-width: 375px;
max-width: 375px;
min-height: 500px;
max-height: 500px;

& > .title {
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
.name {
  position: absolute;
  width: 323px;
  height: 39px;
  left: 26px;
  top: 198px;
  
  background: #F6F6FB;
  border-radius: 13px;
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.date {
  position: absolute;
  width: 323px;
  height: 39px;
  left: 26px;
  top: 282px;
  
  background: #F6F6FB;
  border-radius: 13px;
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.amount {
  position: absolute;
  width: 323px;
  height: 39px;
  left: 26px;
  top: 365px;
  
  background: #F6F6FB;
  border-radius: 13px;
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.shelf {
  position: absolute;
  width: 323px;
  height: 39px;
  left: 26px;
  top: 452px;
  
  background: #F6F6FB;
  border-radius: 13px;
  font-family: Pier Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #000000;
}
.Storage {
  position: absolute;
  width: 323px;
  height: 46px;
  left: 26px;
  top: 541px;
  
  background: #F6F6FB;
  border-radius: 18px;
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

    <div className="title">
      Add an Item
    </div>
    <div className='name'>
      Item Name
    </div>

    <Input></Input>
    <div className='date'>
      Expiry Date (dd/mm/yyyy)
    </div>

    <Input></Input>

    <div className='amount'>
      Amount      
    </div>
    <Input></Input>

    <div className='shelf'>
      Shelf      
     </div>
    <Input></Input>

    <div className='storage'>
      Storage
      
      <AddButton />
    </div>
  </Main>
}


export default AddItem;