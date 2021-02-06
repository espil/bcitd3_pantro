import React from 'react';
import styled from 'styled-components';
import AddButton from "../comps/AddButton/index.js";
import Input from "../comps/Input"
import BrBut from "../comps/BackButtonC/index.js"
import { Link } from "react-router-dom";
import sort from '../icons/settings.svg';

const Container = styled.div`
display:flex;
flex-direction:column;
width: 323px;
height: 730px;
padding:26px;
.header{
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

const Sort = () => {

    return <Container>
        <BrBut></BrBut>
        <div className="header">Sort & Filter</div>
        <Input header="Filter By Name" />
        <div>
            <TopText>Sort By</TopText>
            <DropdownSelect>
                <DropdownOption>None</DropdownOption>
                <DropdownOption>Oldest</DropdownOption>
                <DropdownOption>Freshest</DropdownOption>
                <DropdownOption>Alphabetical (A-Z)</DropdownOption>
                <DropdownOption>Reverse Alphabetical (Z-A)</DropdownOption>
            </DropdownSelect>
        </div>
        <Link to="/">
            <AddButton text="Sort Items" image={sort}></AddButton>
        </Link>

    </Container>
}

export default Sort;