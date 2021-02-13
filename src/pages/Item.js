import styled from 'styled-components';
import Bbut from 'comps/BackButton';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;
    width: 375px;
    .shadow{
        width:375px;
        height:250px;
        background: rgba(177, 177, 177, 0.22);
        position:absolute;
    }
    .image{
        & img{
            width:375px;
            height:250px;
            object-fit:cover;
        }
    }
`;

const FoodInfoCont = styled.div`
background-color:white;
border-radius: 33.5px 33.5px 0px 0px;
position:absolute;
padding-bottom:52px;
position:absolute;
top:175px;
`

const Header = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin: 26px 26px 0 26px;

.food_name{
    font-family: Pier Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
}
.expiry_date{
    display:flex;
    margin-top:5px;
}
.expiry{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    opacity:0.5;
    margin-right:10px;
}
.dot{
    width: 16px;
    height: 16px;
    background: #70DA40;
    border-radius:50%;
}
`

const Macros = styled.div`
width:auto;
display:flex;
flex-direction:row;
justify-content:center;
margin: 26px 26px 0 26px;
& > div {
    width: 94px;
    height: 58px;
    background: #F6F6FB;
    border-radius: 8px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
.macro_number {
    font-family: Pier Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
}
.macro_name {
    font-family: Pier Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;    
    opacity: 0.5;
  }
  .middle {
    margin:0 20.5px;
  }
`

const StorageInfo = styled.div`
margin: 26px 26px 0 26px;
.info_cont{
    margin-bottom:13px;
}
.info_header{
    font-family: Pier Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:5px;
}
.info_text{
    font-family: Pier Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    opacity:0.5;
}
`

const Nutrition = styled.div`
border-radius: 16px;
background-color: #F6F6FB;
margin: 26px 26px 0 26px;
padding-bottom:13px;
.nutrition_head{
    font-family: Pier Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;   
    padding: 13px 0px 13px 26px;
    display:flex;
}
.dark_grey{
    font-family: Pier Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    height:34px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 26px;
    background-color: #EDEDED;
}
`

const Item = () => {
    const [items, setItems] = useState([]);
    const params = useParams();
    console.log("params", params)

    const GetItems = async () => {
        var resp = await axios.get("https://pantro-db.herokuapp.com/api/items/");

        console.log("items", resp.data.Item);

        setItems({ ...resp.data.Item[params.id-1] });
    }

    useEffect(() => {
        GetItems();
    }, []);

    return <Container>
        <div className="image">
            <img src={items.ImgSrc} />
        </div>
        <div className="shadow"></div>
        <Bbut></Bbut>
        <FoodInfoCont>
            <Header>
                <div className="food_name">{items.Name}</div>
                <div className="expiry_date">
                    <div className="expiry">expires in {items.Expiry} days</div>
                    <div className="dot"></div>
                </div>
            </Header>

            <StorageInfo>
                <div className="info_cont">
                    <div className="info_header">Amount</div>
                    <div className="info_text">{items.Amount} items are currently stored</div>
                </div>
                <div className="info_cont">
                    <div className="info_header">Item Storage</div>
                    <div className="info_text">Find it in the {items.StorageID}</div>
                </div>
                <div className="info_cont">
                    <div className="info_header">Shelf</div>
                    <div className="info_text">Find it on your {items.ShelfID} Shelf</div>
                </div>
            </StorageInfo>
            <Macros>
                <div>
                    <div className="macro_number">?</div>
                    <div className="macro_name">Protein</div>
                </div>
                <div className="middle">
                    <div className="macro_number">?</div>
                    <div className="macro_name">Carbs</div>
                </div>
                <div>
                    <div className="macro_number">?</div>
                    <div className="macro_name">Fat</div>
                </div>
            </Macros>
            <Nutrition>
                <div className="nutrition_head">
                    Nutrition Facts
            </div>
                <div>
                    <div className="dark_grey">
                        <div>?</div>
                        <div>? g</div>
                    </div>
                </div>
            </Nutrition>
        </FoodInfoCont >
    </Container>
}

export default Item;