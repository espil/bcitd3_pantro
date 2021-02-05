import React from 'react'; 
import styled from 'styled-components'; 

const Container = styled.div`
    margin-left: 0.7vw;
`; 

const InputMain = styled.input`
    min-width: 323px; 
    min-height: 39px; 
    border: 1px solid #F6F6FB; 
    border-radius: 13px; 
    background-color: #F6F6FB; 
`; 

const TopText = styled.p`
    font-size: 16px; 
`; 

const InputBox = ({text}) => {
    return <Container>
    <TopText text={text}>Shelf Name</TopText>
    <InputMain />
    </Container>
}

InputBox.defaultProps = {
    text: "Shelf Name",
}

export default InputBox;