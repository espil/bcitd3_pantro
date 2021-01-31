import React from 'react';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
import FoodInfo from 'comps/FoodInfo';
import styled from 'styled-components';

import AddButton from 'comps/button';
import DescInp from 'comps/input';

const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  height:100vh;
`;

const Main = () => {

  return <Container>
    <FoodInfo />
    {/* <AddButton />
    <DescInp /> */}
  </Container>



}

export default Main;