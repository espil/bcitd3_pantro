import React from 'react';
import styled from 'styled-components';
import ShelfItem from 'comps/ShelfItem';
import ListedItem from 'comps/ListedItem';
import FoodList from 'comps/FoodList';
import ProduceShelf from 'comps/ProduceShelf';
import BrBut from "../comps/brbut.js";

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
    margin: 52px 0px;
`;


const Sort = () => {

    return <Container>
        <BrBut />
        <ItemName>Produce</ItemName>
       <ProduceShelf />



    </Container>
}

export default Sort;