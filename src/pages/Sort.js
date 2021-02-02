import React from 'react';
import styled from 'styled-components';
import AddButton from "../comps/adbutton.js"
import Slider from "../comps/Slider"
import Dropdown from "../comps/Dropdown"
import BrBut from "../comps/brbut.js"

const Container = styled.div`
display:flex;
flex-direction:column;
width: 323px;
height: 760px;
padding:26px;
.header{
    font-family: Pier Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin:52px 0px;
}
.select{
    font-family: Pier Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    border-radius:
    width: 323px;
    height: 39px;
    background: #F6F6FB;
    border-radius: 13px;
    border:none;
    margin-bottom:26px;
}
`;

const Sort = () => {

    return <Container>
        <BrBut></BrBut>
        <div className="header">Sort & Filter</div>
        {/* <select className="select">
            <option>Oldest</option>
            <option>Freshest</option>
            <option>Alphabetical (A-Z)</option>
            <option>Reverse Alphabetical (Z-A)</option>
        </select> */}
        <Dropdown></Dropdown>
        <Slider></Slider>
        <AddButton text="Sort Items"></AddButton>

    </Container>
}

export default Sort;