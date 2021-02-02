import React from 'react';
import styled from 'styled-components';
import ShelfItem from 'comps/ShelfItem';
import ListedItem from 'comps/ListedItem';
import FoodList from 'comps/FoodList';
import ProduceShelf from 'comps/ProduceShelf';

const Container = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;
    width: 375px;
    height: 812px;
    border:1px solid red;
    margin: 26px;
`;

const Sort = () => {

    return <Container>

       <ProduceShelf />



    </Container>
}

export default Sort;