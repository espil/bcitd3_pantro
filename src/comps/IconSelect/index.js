import React from 'react'; 
import styled from 'styled-components'; 

const IconContainer = styled.div`
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
`;

const IconSelect = () => {
    return <IconContainer>
        <IconRowOne>
            <IconPicture src="LettuceIcon.png" />
            <IconPicture src="MilkIcon.png" />
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