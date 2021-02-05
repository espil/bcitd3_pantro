import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
  width: 323px;
  height: 39px;
  background-color:#F6F6FB;  
  color: #000;
  font-size: 14px;
  cursor: pointer;
  border-radius:13px;
  border:none;

  font-family: Pier Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

const TopText = styled.p`
    color: black; 
    font-weight: bold; 
    margin-left: 0.5vw;
    user-select: none; 
`;

const DescInp = ({header}) => {

  return <Container>
    <TopText>{header}</TopText>
    <Input />
  </Container>
}

DescInp.defaultProps = {
  header: "header text",
}


export default DescInp;
