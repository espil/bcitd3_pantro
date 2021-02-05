import React from 'react';
import styled from 'styled-components';
import Dropdown from 'comps/Dropdown';
import Shelves from "../comps/Shelves"
import FoodList from "../comps/FoodList"
import FAB from "../comps/FAB"
import ListedItem from "../comps/ListedItem"
import restaurant from '../icons/restaurant_black.svg';
import sort from '../icons/settings_black.svg';
import { Link } from "react-router-dom";
import AddItem from "../pages/AddItem";

const Container = styled.div`
width: 375px;
overflow-x: hidden;
`;

const Header = styled.div`
display :flex;
justify-content:space-between;
margin:0px 26px 26px 26px;
& > div {
display:flex;
flex-direction:row;
font-family: Pier Sans;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
}
.image {
  width: 20px;
  height: 20px;
}
`;

const Home = () => {

    return <Container>
        <Shelves></Shelves>
        <Header>
            <div>
                <img className="image" src={restaurant} alt="restaurant" />
                <div>&nbsp;My Food</div>
            </div>
            <Link to="/sort">
                <img className="image" src={sort} alt="sort" />
            </Link>
        </Header>
        <div>
            <Link to="/item">
                <ListedItem />
            </Link>
            <ListedItem />
            <ListedItem />
            <ListedItem />
            <ListedItem />
        </div>
        <Link to="/add-item">
            <FAB></FAB>
        </Link>
    </Container>
}

export default Home;