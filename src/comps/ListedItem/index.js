import React from 'react';
import styled from 'styled-components';
import "../../App.css";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 375px;
    max-width: 375px;
    min-height: 60px;
    max-height: 60px;
    background-color: #ffffff;
`;

const ListedName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    color: #000000;
    margin-left: 10px;
`;

const Bullet = styled.div`
    width:${props=>props.width ? props.width : "22px"};
    height:${props=>props.height ? props.height : "22px"};
    border-radius: 50%;
    background-color:${props=>props.bulletcolor ? props.bulletcolor : "#d3d3d3"};
`;

const ItemName = styled.div`
    color: #000000;
    font-size: 18px; 
    font-family: 'PierSans';
    margin-left: 20px;
`;

const NameCont = styled.div`
    display: flex;
    align-items: center;
    max-height: 30px;
    flex-direction: row;
    padding:10px;
`;

const TimeLeft = styled.div`
    display: flex;
    align-items: center;
    color: #000000;
    font-size: 18px; 
    font-family: 'PierSans';
    margin-right: 20px;
`;

const TimeText = styled.div`
    color: #999999;
    font-size: 14px;
    font-family: 'PierSans';
    padding-right: 20px;
`;

const ListedItem = ({width, height, bulletcolor, foodname, expiry, onBulletSelect}) => {

    return <Container>
        <ListedName>
            <NameCont>
                <Bullet bulletcolor={bulletcolor} onClick={()=>{
                onBulletSelect()
            }}/> 
                <ItemName>{foodname="Cucumber"}</ItemName>
            </NameCont>
        </ListedName>
        <TimeLeft>
            <TimeText>{expiry="5"} days</TimeText>
            <Bullet width="15px" height="15px" bulletcolor="#70DA40" />
        </TimeLeft>
    </Container >
}

ListedItem.defaultProps = {
    width: null,
    height: null,
    bulletcolor: null,
    foodname: null,
    expiry: null,
    onBulletSelect:()=>{}
}

export default ListedItem;