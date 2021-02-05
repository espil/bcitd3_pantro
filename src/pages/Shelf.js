import React, { useState } from 'react';
import styled from 'styled-components';
import ShelfItem from 'comps/ShelfItem';
import BrBut from "../comps/BackButtonC/index.js";
import { Link } from "react-router-dom";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-item:center;
    justify-content:flex-start;
    width: 323px;
    height: 760px;
    padding:26px;
`;

const ItemName = styled.div`
    color: #000000;
    font-size: 24px; 
    font-family: 'PierSans';
    font-style: normal;
    font-weight: 700;
    margin:52px 0px;
`;

const ProShelf = () => {

    // const [produceShelfClick, setProduceShelfClick] --- working on this part

    return <Container>
        <BrBut />
        <ItemName>Shelf Name</ItemName>
        <ShelfItem />
    </Container>
}

export default ProShelf;