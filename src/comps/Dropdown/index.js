import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`;

const DropdownSelect = styled.select`
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

const Dropdown = ({ option, onContainerSelect}) => {

    return <Container>
        <DropdownSelect>
            <DropdownOption>{option="None"}</DropdownOption>
            <DropdownOption>{option="Oldest"}</DropdownOption>
            <DropdownOption>{option="Freshest"}</DropdownOption>
            <DropdownOption
                onClick={()=>{
                    onContainerSelect();
                }}
            >{option="Alphabetical (A-Z)"}</DropdownOption>
            <DropdownOption>{option="Reverse Alphabetical (Z-A)"}</DropdownOption>
        </DropdownSelect>
    </Container>
}

Dropdown.defaultProps = {
    option: "option text",
    onContainerSelect:()=>{}
}

export default Dropdown;     