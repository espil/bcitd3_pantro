import React from 'react';
import styled from 'styled-components';
import vegetables from '../../icons/vegetables.svg';
import shelves from '../../icons/shelves.svg';
import "../../App.css";

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
border:1px solid red;
width:375px;
height:fit-content
`

const Header = styled.div`
display:flex;
margin:26px 0px 0px 26px;
& > div {
    font-family: Pier Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
& > img {
    width: 22px;
    height: 22px;
    margin-right:6px;
  }
`

const Shelf = styled.div`
display:flex;
flex-direction:column;
width: 140px;
height: 170px;
background: #F6F6FB;
border-radius: 14px;
margin:26px;
& > img {
    width: 60px;
    height: 60px;
    border-radius:50%;
    margin:22px 0px 0px 16px
  }
& > div.header {
    font-family: Pier Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;    
    margin:16px 16px 0px 16px;
  }
& > div.subheader {
    font-family: Pier Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;    
    opacity: 0.5;
    margin:8px 16px 0px 16px;
  }
`

const FAB = () => {

    return <Container>
        <Header>
            <img src={shelves} alt="shelves" />
            <div>My Shelves</div>
        </Header>
        <Shelf>
            <img src={vegetables} alt="shelficon" />
            <div className="header">Produce</div>
            <div className="subheader">Fresh leafy greens!</div>
        </Shelf>
    </Container >
}

FAB.defaultProps = {

}

export default FAB;