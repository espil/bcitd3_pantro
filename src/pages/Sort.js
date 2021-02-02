import React from 'react';
import styled from 'styled-components';
import AddButton from "../comps/adbutton.js"

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

    </Container>
}

export default Sort;