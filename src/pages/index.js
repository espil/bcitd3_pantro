import React from 'react';
import button from 'comps/button';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
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
     </Container>

 

} 

export default Main;