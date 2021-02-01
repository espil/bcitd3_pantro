import React from 'react';
import styled from 'styled-components';
import "../../App.css";
import cucumber from '../../img/veg/cucumber.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width:${props=>props.width ? props.width : '80px'};
    max-width:${props=>props.width ? props.width : '80px'};
    height: fit-content;
    margin: 15px;
`;

const SquareIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 10px;
    object-fit: cover;
`;

const ItemName = styled.div`
    color: #000000;
    font-size: 16px; 
    font-family: 'PierSans';
    padding: 5px;
`;


const ShelfItem = (width, height, foodname) => {

    return <Container>
        <SquareIcon>
            <img src={cucumber} alt="Cucumber" width='55px' height='50px' />
        </SquareIcon>
        <ItemName>
            <div>{foodname="Cucumber"}</div>
        </ItemName>
    </Container >
}

ShelfItem.defaultProps = {
    width:null,
    height:null,
    foodname: null
}

export default ShelfItem;