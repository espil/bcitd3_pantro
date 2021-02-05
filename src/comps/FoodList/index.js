import React from 'react';
import styled from 'styled-components';
import ListedItem from "../ListedItem";
import utensils from '../../icons/utensils.svg';
import settings from '../../icons/settings.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 375px;
    max-width: 375px;
    min-height: 500px;
    max-height: 500px;
    border:1px solid red;
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