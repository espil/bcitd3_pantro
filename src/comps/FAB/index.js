import React from 'react';
import styled from 'styled-components';
import plus from '../../icons/plus.svg';

const Container = styled.div`
position: fixed;
bottom:26px;
right:26px;
width: 64px;
height: 64px;
border-radius:32px;
background: #23B3F2;
box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
display:flex;
justify-content:center;
align-items:center;
& > img {
  width: 24px;
  height: 24px;
}
`

const FAB = () => {

  return <Container>
    <img src={plus} />
  </Container >
}

FAB.defaultProps = {

}

export default FAB;