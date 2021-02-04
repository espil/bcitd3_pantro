import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const IconContainer = styled.div`
    margin-top: 2%; 
`; 

const TopText = styled.p`
    color: black; 
    margin-left: 0.7vw;
    user-select: none; 
    font-size: 16px; 
`;

const IconRowOne = styled.div`
    display: flex; 
    flex-direction: row;    
`; 

const IconRowTwo = styled.div`
    display: flex; 
    flex-direction: row;    
`; 

const IconRowThree = styled.div`
    display: flex; 
    flex-direction: row;    
`; 

const IconPicture = styled.img`
    width: 60px; 
    height: 60px; 
    margin: 10px; 
    cursor: pointer; 
    user-select: none; 
    border:${props=>props.chosen ? "2px solid #FF7750" : "none"};
    border-radius: 51px; 
    &:hover {
        transform: scale(1.2); 
        transition: 0.2s; 
    }
`;

const IconSelect = () => {
    
    const [chosen, setChosen] = useState(false);

    return <IconContainer>
        <TopText>Icon</TopText>
        <IconRowOne>
            <IconPicture src="LettuceIcon.png" chosen={chosen} onClick={() =>{
                setChosen(!chosen)
            }}/>
            <IconPicture src="MilkIcon.png" chosen={chosen} onClick={() =>{
                setChosen(!chosen)
            }}/>
            <IconPicture src="BurgerIcon.png" />
            <IconPicture src="SteakIcon.png" />
        </IconRowOne>
        <IconRowTwo>
            <IconPicture src="FlourIcon.png" />
            <IconPicture src="CrabIcon.png" />
            <IconPicture src="JuiceboxIcon.png" />
            <IconPicture src="SaltIcon.png" />
        </IconRowTwo>
        <IconRowThree>
            <IconPicture src="WineIcon.png" />
            <IconPicture src="LoafIcon.png" />
            <IconPicture src="JuiceIcon.png" />
            <IconPicture src="AppleIcon.png" />
        </IconRowThree>
    </IconContainer>
}

IconSelect.defaultProps = {

}

export default IconSelect 