import React from 'react';
import styled from 'styled-components';
import "../../App.css";
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
`;

const FoodListHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
`;

const HeaderText = styled.div`
    display: flex;
    align-items: center;
    font-family: 'PierSans';
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`;

const MyFood = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 150px;
`;

const FoodList = (width, height, bulletcolor) => {

    return <Container>
        <FoodListHeader>
            <MyFood>
                <img src={utensils} width='30px' height='30px' />
                <HeaderText>My Food</HeaderText>
            </MyFood>
            <img src={settings} width='30px' height='30px' />
            
        </FoodListHeader>

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