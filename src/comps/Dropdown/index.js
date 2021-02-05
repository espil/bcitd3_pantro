import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`;

const ImageContainer = styled.img`
    display: flex; 
    margin-left: 90%;
    margin-top: 5%; 
    user-select: none; 
    transform:${props => props.expanded ? "rotate(0deg)" : "rotate(-180deg)"};
    transition: 0.3s;
`;

const DropdownInputContainer = styled.select`
    height: 39px;
    width: 323px;
    background-color: #F6F6FB; 
    border-radius: 13px; 
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border:none;
    padding-right: 16px;
    -webkit-box-sizing: border-box; 
    font-family: Pier Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    &:hover {
        background-color: #C7C7C7; 
        transition: 0.3s; 
    }

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

const ItemOne = styled.div`
border-radius: 13px; 
&:hover {
    background-color: #B0B0B0; 
    color: white; 
    transition: 0.25s; 
}
`;

const Dropdown = ({ header, option}) => {

    return <Container>
        <TopText>{header}</TopText>
        <DropdownInputContainer>
            <DropdownOption value="produce">{option}</DropdownOption>
        </DropdownInputContainer>
    </Container>
}

Dropdown.defaultProps = {
    header: "header text",
    option: "option text",
}

export default Dropdown;     