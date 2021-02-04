//THIS PAGE MAY BE IRRELEVANT **** (Britt)

import React from 'react';
import styled from 'styled-components';
import ShelfItem from "comps/ShelfItem";

import cucumber from '../../img/veg/cucumber.png';
import beets from '../../img/veg/beets.png';
import carrots from '../../img/veg/carrots.png';
import celery from '../../img/veg/celery.png';
import cilantro from '../../img/veg/cilantro.png';
import leek from '../../img/veg/leek.png';
import tomato from '../../img/veg/tomato.png';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 100%;
    max-width: 100%;
    height: fit-content;
`;


const ProduceShelf = (width, height, img, foodname) => {

    return <Container>
        {/* <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem />
        <ShelfItem /> */}
    </Container >
}

ProduceShelf.defaultProps = {
    width:null,
    height:null,
    img:null
}

export default ProduceShelf;