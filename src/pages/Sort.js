import React from 'react';
import styled from 'styled-components';
import AddButton from "../comps/adbutton.js"
import Slider from "../comps/Slider"
import BrBut from "../comps/brbut.js"

const Container = styled.div`
display:flex;
flex-direction:column;
width: 323px;
height: 760px;
border:1px solid red;
padding:26px;
.header{
    font-family: Pier Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
}
`;

const Sort = () => {

    return <Container>
        <BrBut></BrBut>
        <div className="header">Sort & Filter</div>
        <Slider></Slider>
        <AddButton text="Sort Items"></AddButton>

    </Container>
}

export default Sort;