import React from 'react';
import styled from 'styled-components';
import FoodInfo from 'comps/FoodInfo';
import Bbut from 'comps/BackButton';
import cucumber from "../img/cucumbers.jpg"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;
    width: 375px;
    .shadow{
        width:375px;
        height:250px;
        background: rgba(177, 177, 177, 0.22);
        position:absolute;
    }
    .image{
        & img{
            width:375px;
            height:250px;
            object-fit:cover;
        }
    }
`;

const Item = ({ match, location }) => {
    // const { params: { itemId } } = match;

    return <Container>
        <div className="image">
            <img src={cucumber} />
        </div>
        <div className="shadow"></div>
        <Bbut></Bbut>
        <FoodInfo />

    </Container>
}

export default Item;