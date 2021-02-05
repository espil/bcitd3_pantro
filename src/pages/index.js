import React from 'react';
import styled from 'styled-components';
import FoodList from 'comps/FoodList';

//FoodList functions
// const [clickedBullet, setClickedBullet] = useState(null);

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