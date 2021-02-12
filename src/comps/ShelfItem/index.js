import React from 'react';
import styled from 'styled-components';
import cucumber from '../../img/veg/cucumber.png';
// const itemcontent = require("../../itemDB.json");

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 52px 0px;
.center{
    display: flex;
    justify-content:center;
}
`;

const ShelfCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const SquareIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: #F6F6FB;
    border-radius: 24px;
    object-fit: contain;
`;

const ItemName = styled.div`
    color: #808080;
    font-size: 16px; 
    font-family: 'PierSans';
    padding-top: 5px;
`;


const ShelfItem = () => {

    return <Container>

        {itemcontent.map(o => <div className="center"><ShelfCont>
            <SquareIcon >
                <img src={cucumber} width='55px' height='55px' />
            </SquareIcon>
            <ItemName>{o.name}</ItemName>
        </ShelfCont >  </div>)}

    </Container>
}

ShelfItem.defaultProps = {

}

export default ShelfItem;