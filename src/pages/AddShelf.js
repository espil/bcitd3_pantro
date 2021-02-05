import React from 'react';
import styled from 'styled-components';
import IconSelect from 'comps/IconSelect';
import Input from 'comps/Input';
import BrBut from "../comps/BackButtonC/index.js";
import AddButton from '../comps/AddButton/index.js';
import shelf from '../icons/shelf.png';

const Container = styled.div`
display:flex;
flex-direction:column;
width: 323px;
height: 730px;
padding:26px;
.header {
    font-family: Pier Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin:52px 0px 26px 0px;
}
`;

const AddShelf = () => {
    return <Container>
        <BrBut></BrBut>
        <div className="header">Add a Shelf</div>
        <Input header="Shelf Name" />
        <Input header="Description" />
        <IconSelect />
        <AddButton text="Add Shelf" src={shelf} />
    </Container>
}

export default AddShelf; 