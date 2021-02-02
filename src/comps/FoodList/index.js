import React from 'react';
import styled from 'styled-components';
import "../../App.css";
import ListedItem from "../ListedItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 375px;
    max-width: 375px;
    min-height: 500px;
    max-height: 500px;
`;

const FoodList = (width, height, bulletcolor) => {

    return <Container>
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
        <ListedItem />
    </Container >
}

FoodList.defaultProps = {

}

export default FoodList;