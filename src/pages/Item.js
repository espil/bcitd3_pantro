import React from 'react';
import styled from 'styled-components';
import FoodInfo from 'comps/FoodInfo';
import Bbut from 'comps/bbut';
import cucumber from "../img/veg/cucumber.png"


const Container = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;
    width: 375px;
    height: 812px;
    .image{

    }
`;

const Item = () => {

    return <Container>
        <Bbut></Bbut>
        <div className="image">
            <img src={cucumber} />
        </div>
        <FoodInfo />

    </Container>
}

export default Item;