import React, {useState} from 'react'; 
import styled from 'styled-components';

const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30%;
`; 

const ImageContainer = styled.img`
    display: flex; 
    margin-left: 90%;
    margin-top: 5%; 
    user-select: none; 
    transform:${props=>props.expanded ? "rotate(0deg)" : "rotate(-180deg)"};
    transition: 0.3s;
`; 

const DropdownInputContainer = styled.select`
    max-width: 323px; 
    min-height: 39px; 
    background-color: #F6F6FB; 
    border-radius: 13px; 
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    &:hover {
        background-color: #C7C7C7; 
        transition: 0.3s; 
    }

`; 

const DropdownOption = styled.option`
    min-height: 133px; 
    max-width: 323px; 
    background-color: #F6F6FB;
    font-size: 16px;
    font-weight: bold;
    border-radius: 13px; 
    &:hover {
        background-color: #C7C7C7; 
        transition: 0.3s; 
    }
`; 
// const ImageContainer = styled.img`
//     display: flex; 
//     margin-left: 90%;
//     margin-top: 5%; 
//     user-select: none; 
//     transform:${props=>props.expanded ? "rotate(0deg)" : "rotate(-180deg)"};
//     transition: 0.3s;
// `; 

// const DropdownInputContainer = styled.div`
//     max-width: 323px; 
//     min-height: 39px; 
//     background-color: #F6F6FB; 
//     border-radius: 13px; 
//     cursor: pointer;
//     &:hover {
//         background-color: #C7C7C7; 
//         transition: 0.3s; 
//     }
// `; 

// const DropdownContainer = styled.div`
//     min-height: 133px; 
//     max-width: 323px; 
//     background-color: #F6F6FB;
//     display:${props=>props.expanded ? "inline-flex" : "hidden"};
//     height:${props=>props.expanded ? "auto" : "0px"};
//     opacity:${props=>props.expanded ? 1 : 0};
//     transition:opacity 0.5s;
//     flex-direction:column;
//     margin-top: 20px; 
//     border-radius: 13px;
//     & > div {
//         padding: 10px 0px 10px 10px;
//         margin-left: 10px;
//         font-weight: bold;
//         font-size: 16px;
//         cursor: pointer;
//         user-select: none;
//     }
// `;

const TopText = styled.p`
    color: black; 
    font-weight: bold; 
    margin-left: 0.5vw;
    user-select: none; 
`; 

// const ItemOne = styled.div`
// border-radius: 13px; 
// &:hover {
//     background-color: #FF7750; 
//     color: white; 
//     transition: 0.25s; 
// }
// `; 

// const ItemTwo = styled.div`
// border-radius: 13px; 
// &:hover {
//     background-color: #FF7750; 
//     color: white; 
//     transition: 0.25s; 
// }
// `; 

// const ItemThree = styled.div`
// border-radius: 13px; 
// &:hover {
//     background-color: #FF7750; 
//     color: white; 
//     transition: 0.25s; 
// }
// `; 


const ChoiceSlider = () => {
 
    return <SliderContainer>
    <TopText>Storage</TopText>
    <DropdownInputContainer>
        <ImageContainer src="/DownCadet.png" />
        <DropdownOption>Fridge</DropdownOption>
        <DropdownOption>Pantry</DropdownOption>
        <DropdownOption>Freezer</DropdownOption>
    </DropdownInputContainer>
    </SliderContainer> 
}

export default ChoiceSlider;     