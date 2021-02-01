import React from 'react';
import button from 'comps/button';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
import ShelfItem from 'comps/ShelfItem';
import ListedItem from 'comps/ListedItem';
import FoodList from 'comps/FoodList';
import ProduceShelf from 'comps/ProduceShelf';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  height:100vh;
`;

const Main = () => {

  return <Container>
    <Shelves />
    <FoodList />
    <ProduceShelf />
     </Container>

 

} 

export default Main;