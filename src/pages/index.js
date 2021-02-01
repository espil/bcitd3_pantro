import React from 'react';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
import ShelfItem from 'comps/ShelfItem';
import ListedItem from 'comps/ListedItem';
import FoodList from 'comps/FoodList';
import ProduceShelf from 'comps/ProduceShelf';
import FoodInfo from 'comps/FoodInfo';

import styled from 'styled-components';

import AddButton from 'comps/adbutton';
import DescInp from 'comps/input';
import Bbut from 'comps/bbut';
import BrBut from 'comps/brbut';

const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  height:100vh;
`;

const Main = () => {

  return <Container>

    <ProduceShelf />

  </Container>
}

export default Main;