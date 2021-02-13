import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FAB from "../comps/FAB"
import restaurant from '../icons/restaurant_black.svg';
import sort from '../icons/settings_black.svg';
import add from '../icons/add.svg';
import shelf_icon from '../icons/shelves.svg';
import { Link } from "react-router-dom";
import Input from "comps/Input"; 
// import Dropdown from "comps/Dropdown"; 
import axios from "axios";

const Container = styled.div`
width: 375px;
overflow-x: hidden;
font-family: Pier Sans;
.header{
    display :flex;
    justify-content:space-between;
    margin:26px 26px 0px 26px;
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
}
`;

const DropdownSelect = styled.select`
    width: 327px;
    height: 42px;
    background-color:#F6F6FB;  
    color: #000;
    font-size: 14px;
    cursor: pointer;
    border-radius:13px;
    border:none;
    padding:10px;
    font-family: Pier Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    border:none;
    padding-right: 16px;
    -webkit-box-sizing: border-box; 
    margin: 20px 0px 20px 20px; 
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

const TopText = styled.p`
    color: black; 
    font-weight: bold; 
    margin-left: 0.5vw;
    user-select: none; 
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

const ShelfContainer = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
.spacer{
    width:50px;
}
`
const Spacer = styled.div`
    padding:13px;
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

const Shelves = ({ description, header, icon }) => {
    return <Shelf>
        <img className="image" src={icon} alt="" />
        <div className="header">{header}</div>
        <div className="subheader">{description}</div>
    </Shelf>
}

const ListedItem = ({ id, name, expiry, onBulletSelect, onClick }) => {

    return <Container>
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
        </Container>
}

const Home = () => {
    
    const [allitems, setAll] = useState([]); 
    const [items, setItems] = useState([]);
    const [shelves, setShelves] = useState([]);

    const GetContent = async () => {
        var resp = await axios.get("https://pantro-db.herokuapp.com/api/items");
        var resptwo = await axios.get("https://pantro-db.herokuapp.com/api/shelves");
        console.log("items", resp.data.Item);
        console.log("shelves", resptwo.data.Shelf);
        setAll(resp.data); 
        setItems([...resp.data.Item])
        setShelves([...resptwo.data.Shelf])
    }

    const FilterPage = (text) => {
        setItems(
            allitems.filter((o)=>{
                return o.Name.includes(text); 
            })
        )
    }

    useEffect(() => {
        GetContent();
    }, []);

// FILTER ALPHABETICALLY
    const [sortitems, setSort] = useState(null);
    
    const AlphaFilter = (sortitems) => {
            setSort(
                sortitems.sort(sortByName)
        )
    }

    function sortByName(a,b){
        if(a.name > b.name){
            return 1;
        } else if(a.name < b.name){
            return -1;
        } else {
            return 0;
        }
    }

//FILTER REVERSE ALPHABETICALLY
    const [reversesortitems, setReverseSort] = useState(null);
        
    const reverseAlphaFilter = (reversesortitems) => {
            setReverseSort(
            reversesortitems.sort(reverseSortByName)
        )
    }


    function reverseSortByName(a,b){
        if(a.name > b.name){
            return -1;
        } else if(a.name < b.name){
            return 1;
        } else {
            return 0;
        }
    }


    return <Container>
        <div className="header">
            <div >
                <img className="image" src={shelf_icon} alt="shelf_icon" />
                <div>&nbsp;My Shelves</div>
            </div>
        </div>
        <ShelfContainer>

            {shelves.map((o, i) => <Link to={"/shelf/" + o.id} style={{ textDecoration: 'none', color: "black" }}>
                <Shelves key={i} header={o.Name} description={o.Description} icon={o.IconID} />
            </Link>)}

            <Link to="/add-shelf" style={{ textDecoration: 'none', color: "black" }}>
                <Shelf >
                    <img className="image" src={add} alt="icon" />
                    <div className="header">Add Shelf</div>
                    <div className="subheader">Sort your items using shelfs!</div>
                </Shelf>
            </Link>
            <Spacer />
        </ShelfContainer>
        <Header>
            <div>
                <img className="image" src={restaurant} alt="restaurant" />
                <div>&nbsp;My Food</div>
            </div>
            <Link to="/sort">
                <img className="image" src={sort} alt="sort" />
            </Link>
        </Header>

        <Input onChange={(e) =>{
            FilterPage(e.target.value); 
        }} header="Filter By Name" />
            <DropdownSelect>
                <DropdownOption>None</DropdownOption>
                <DropdownOption>Oldest</DropdownOption>
                <DropdownOption>Freshest</DropdownOption>
                <DropdownOption 
                    onContainerSelect={AlphaFilter}>Alphabetical (A-Z)</DropdownOption>
                <DropdownOption
                    onContainerSelect={reverseAlphaFilter}>Reverse Alphabetical (Z-A)</DropdownOption>
            </DropdownSelect>

        {items.map((o, i) => <Link to={"/item/" + o.id} style={{ textDecoration: 'none', color: "black" }}>
            <ListedItem key={i} expiry={o.Expiry} name={o.Name} />
        </Link>)}

        <Link to="/add-item">
            <FAB></FAB>
        </Link>


    </Container >
}

export default Home;