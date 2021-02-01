import React from 'react';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
import FoodInfo from 'comps/FoodInfo';
import Dropdown from 'comps/Dropdown'; 
import Slider from 'comps/Slider';
import IconSelect from 'comps/IconSelect'; 
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
    {/* <IconSelect /> */}
    {/* <Slider /> */}
    <Dropdown />
    {/* <FoodInfo /> */}
    {/* <AddButton />
    <DescInp /> */}
    {/* <Bbut /> */}
    {/* <BrBut /> */}
  </Container>



}

export default Main;