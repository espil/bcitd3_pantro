import React from 'react'; 
import styled from 'styled-components';
import IconSelect from 'comps/IconSelect';
import InputBox from 'comps/InputBox';  
import BrBut from "../comps/brbut.js"; 
import AddButton from 'comps/adbutton.js'; 
import shelf from '../icons/shelf.png';

const HeaderText = styled.h1`
    margin-top: 100px;
    margin-bottom: 2.5%;  
    margin-left: 0.7vw; 
`; 

const PageContainer = styled.div`
`; 

const Add = ({text}) => {
    return <PageContainer>
    <BrBut />
    <HeaderText>Add A Shelf</HeaderText>
    <InputBox /> 
    <InputBox text="Description"/>
    <IconSelect />
    <AddButton text="Add Shelf" src={shelf}/>
    </PageContainer> 
}

export default Add; 