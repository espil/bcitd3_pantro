import React, {useState} from 'react'; 
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px; 
    display: flex; 
    flex-direction; 
`; 

const ImageContainer = styled.img`
    display: flex; 
    margin-left: 90%;
    margin-top: 5%; 
    transform: rotate(180deg);
`; 

const DropdownInputContainer = styled.div`
    min-width: 323px; 
    max-height: 39px; 
    background-color: #F6F6FB; 
    border-radius: 13px; 
`; 

const DropdownContainer = styled.div`
    max-height: 133px; 
    min-width: 323px; 
    background-color: #F6F6FB;
    display: flex; 
`;

const TopText = styled.p`
    color: black; 
    font-weight: 400; 
`; 

const Dropdown = () => {
    return <Container>
    <TopText>Shelf</TopText>
    <DropdownInputContainer>
        <ImageContainer src="DownCadet.png"/>
    </DropdownInputContainer>
    <DropdownContainer />
    </Container> 
}

Dropdown.defaultProps = {

}

export default Dropdown;     