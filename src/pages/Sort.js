import React from 'react';
import styled from 'styled-components';
import AddButton from "../comps/adbutton.js";
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
`;

const Sort = () => {

    return <Container>

       <AddButton display_option="none"></AddButton>

    {/*Used by Brittany, whilst testing.*/}
    {/* <div>
        <FoodList />
        <ListedItem />
        <ShelfItem />
        <ProduceShelf />
    </div> */}

    </Container>
}

export default Sort;