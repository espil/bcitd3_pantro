import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Shelves from "../comps/Shelves"
import FAB from "../comps/FAB"
import restaurant from '../icons/restaurant_black.svg';
import sort from '../icons/settings_black.svg';
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
width: 375px;
overflow-x: hidden;
font-family: Pier Sans;
`;

const Header = styled.div`
display :flex;
justify-content:space-between;
margin:0px 26px 26px 26px;
& > div {
display:flex;
flex-direction:row;
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

const ListedName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    color: #000000;
    margin-left: 16px;
`;

const Bullet = styled.div`
    width:${props => props.width ? props.width : "22px"};
    height:${props => props.height ? props.height : "22px"};
    border-radius: 50%;
    background-color:${props => props.bulletcolor ? props.bulletcolor : "#d3d3d3"};
`;

const ItemName = styled.div`
    color: #000000;
    font-size: 18px;
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
    margin-right: 26px;
`;

const TimeText = styled.div`
    color: #999999;
    font-size: 14px;
    padding-right: 20px;
`;

const ListCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 375px;
    max-width: 375px;
    min-height: 60px;
    max-height: 60px;
    background-color: #ffffff;
    border-top: .1px solid rgba(0, 0, 0, .1);
`;

const ListedItem = ({ id, name, expiry, onBulletSelect, onClick }) => {

    return <div>
        <ListCont>
            <ListedName>
                <NameCont>
                    <Bullet onClick={() => {
                        onBulletSelect()
                    }} />
                    <ItemName>{name}</ItemName>
                </NameCont>
            </ListedName>
            <TimeLeft>
                <TimeText>{expiry} days</TimeText>
                <Bullet width="15px" height="15px" bulletcolor="#70DA40" />
            </TimeLeft>
        </ListCont>
    </div >
}

const Home = () => {

    const [items, setItems] = useState([]);
    const GetItems = async () => {
        var resp = await axios.get("https://pantro-db.herokuapp.com/api/items");
        console.log("items", resp.data.Item);

        setItems([...resp.data.Item])
    }

    useEffect(() => {
        GetItems();
    }, []);

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

        {items.map((o, i) => <Link to={"/item/" + o.id} style={{ textDecoration: 'none', color: "black" }}>
            <ListedItem key={i} expiry={o.Expiry} name={o.Name} />
        </Link>)}

        <Link to="/add-item">
            <FAB></FAB>
        </Link>
    </Container >
}

export default Home;