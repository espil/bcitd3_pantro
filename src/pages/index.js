import React from 'react';
import styled from 'styled-components';
import FAB from 'comps/FAB';
import Shelves from 'comps/Shelves';
import ShelfItem from 'comps/ShelfItem';
import ListedItem from 'comps/ListedItem';
import FoodList from 'comps/FoodList';
import ProduceShelf from 'comps/ProduceShelf';
import FoodInfo from 'comps/FoodInfo';
import Dropdown from 'comps/Dropdown'; 
import Slider from 'comps/Slider';
import IconSelect from 'comps/IconSelect'; 
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


    <FoodList />

  </Container>
}

export default Main;