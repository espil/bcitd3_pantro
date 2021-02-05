import React from 'react';
import styled from 'styled-components';
import add from '../../icons/add.svg';
import shelves from '../../icons/shelves.svg';
import { Link } from "react-router-dom";

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:375px;
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
}
`

const ShelfContainer = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
`

const Shelf = styled.div`
flex: 0 0 auto;
flex-direction:column;
width: 140px;
height: 170px;
background: #F6F6FB;
border-radius: 14px;
margin:26px 0px 26px 26px;
.image {
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
`;

const fakeShelfDB = [
  {
    id: 1,
    name: "Produce",
    description: "Fresh leafy greens!",
    icon: "https://svgshare.com/i/Tdm.svg",
  },
  {
    id: 2,
    name: "Dairy",
    description: "For your cravings",
    icon: "https://svgshare.com/i/Tej.svg",
  },
  {
    id: 3,
    name: "Seafood",
    description: "Right from the sea",
    icon: "https://svgshare.com/i/TcH.svg",
  },
]

const Shelves = ({ shelfDatabase }) => {

  return <Container>
    <Header>
      <img src={shelves} alt="shelves" />
      <div>&nbsp;My Shelves</div>
    </Header>
    <ShelfContainer>
      {shelfDatabase.map((o, i) => <Shelf>
        <Link to="/shelf" style={{ textDecoration: 'none', color: "black" }}>
          <img className="image" src={o.icon} alt="icon" />
          <div className="header">{o.name}</div>
          <div className="subheader">{o.description}</div>
        </Link>
      </Shelf>)}
      <Link to="/add-shelf" style={{ textDecoration: 'none', color: "black" }}>
        <Shelf >
          <img className="image" src={add} alt="icon" />
          <div className="header">Add Shelf</div>
          <div className="subheader">Sort your items using shelfs!</div>
        </Shelf>
      </Link>
    </ShelfContainer>
  </Container >
}

Shelves.defaultProps = {
  shelfDatabase: fakeShelfDB,
}

export default Shelves;