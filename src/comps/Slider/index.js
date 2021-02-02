import React from 'react'; 
import styled from 'styled-components'; 

const SliderContainer = styled.div`
    min-width: 323px; 
    max-height: 46px; 
    background-color: #F6F6FB; 
    display: flex; 
    border-radius: 18px;
    justify-content: space-between; 
    align-items: center; 
`; 

const SliderText = styled.p`
    color: black; 
    font-size: 14px; 
    margin: 0px 30px 0px 30px; 
    position: relative; 
`;

const SliderPick = styled.div`
    max-width: 104px; 
    max-height: 38px; 
    background-color: #FF7750; 
    border-radius: 16px; 
    display: flex; 
`; 

const Slider = () => {
    return <SliderContainer>
        <SliderText>Fridge</SliderText>
        <SliderText>Pantry</SliderText>
        <SliderText>Freezer</SliderText>
    </SliderContainer>
}

Slider.defaultProps = {

}

export default Slider;

