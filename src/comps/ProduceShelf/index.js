import React from 'react';
import styled from 'styled-components';
import "../../App.css";
import ShelfItem from "comps/ShelfItem";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 375px;
    max-width: 375px;
    height: fit-content;
`;

const ItemName = styled.div`
    color: #000000;
    font-size: 16px; 
    font-family: 'PierSans';
    padding: 5px;
`;


const ProduceShelf = (width, height) => {

    return <Container>
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
    </Container >
}

ProduceShelf.defaultProps = {
    width:null,
    height:null
}

export default ProduceShelf;