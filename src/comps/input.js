import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 323px;
  height: 39px;
  background-color:#F6F6FB;  
  color: #000;
  font-size: 14px;
  cursor: pointer;
  border-radius:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  & > div {
    width: auto;
    background: #F6F6FB;
    border-radius: 8px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .desc {
    font-family: Pier Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;    
  }
`;


const DescInp = () => {

  return <div><div className="desc">
    <Input>
  </Input>
  </div>
  </div>
}




export default DescInp;
