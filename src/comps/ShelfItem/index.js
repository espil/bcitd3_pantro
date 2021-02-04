import React from 'react';
import styled from 'styled-components';
import cucumber from '../../img/veg/cucumber.png';
// import beets from '../../img/veg/beets.png';
// import carrots from '../../img/veg/carrots.png';
// import celery from '../../img/veg/celery.png';
// import cilantro from '../../img/veg/cilantro.png';
// import leek from '../../img/veg/leek.png';
// import tomato from '../../img/veg/tomato.png';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width:${props=>props.width ? props.width : '33%'};
    max-width:${props=>props.width ? props.width : '33%'};
    height: fit-content;
    margin-bottom: 30px;
`;

const SquareIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70px;
    height: 70px;
    background-color: #F6F6FB;
    border-radius: 10px;
    object-fit: cover;
`;

const ItemName = styled.div`
    color: #808080;
    font-size: 16px; 
    font-family: 'PierSans';
    padding: 5px;
`;


const ShelfItem = ({width, height, foodname, img, onItemClick}) => {

    return <Container>
        <SquareIcon onClick={()=>{
                onItemClick()
            }}>
            <img src={cucumber} width='55px' height='50px' />
        </SquareIcon>
        <ItemName>
            <div>{foodname="Cucumber"}</div>
        </ItemName>
    </Container >
}

ShelfItem.defaultProps = {
    width:null,
    height:null,
    foodname: null,
    onItemClick:()=>{},
    img: null
}

export default ShelfItem;