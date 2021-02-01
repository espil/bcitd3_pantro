import React from 'react';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
import FoodInfo from 'comps/FoodInfo';
import styled from 'styled-components';

import AddButton from 'comps/adbutton';
import DescInp from 'comps/input';
import Bbut from 'comps/bbut';
import BrBut from 'comps/brbut';

//axios

const axios = require('axios').default;

// Make a request for a user with a given ID

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  height:100vh;
`;

//Axios POST 

// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

const Main = () => {

  return <Container>
    <FoodInfo />
    {/* <AddButton />
    <DescInp /> */}
    {/* <Bbut /> */}
    {/* <BrBut /> */}
  </Container>



}

export default Main;