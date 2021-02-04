import React from 'react';
import styled from 'styled-components';

import restaurant from '../icons/restaurant.svg';
// import sort from '../icons/settings.svg';


const Button = styled.div`
  width: 323px;
  height: 57px;
  background-color:#23b3f2;  
  color: white;
  font-family: Pier Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  border-radius:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 18px;
    height: 18px;
  }
`;

function additem(a) {
  a.preventDefault();
  alert('The link was clicked')
}

const AddButton = ({text}) => {

  return <Button>
    <img src={restaurant} />
    &nbsp;{text}
     </Button>

}

AddButton.defaultProps = {
  text:"Add Item",
  image:null,
}

export default AddButton;
