import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
background-color:white;
border-radius: 33.5px 33.5px 0px 0px;
position:absolute;
padding-bottom:52px;
position:absolute;
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
.light_grey{
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
}
`

const fakeItemDB = [
    {
        id: 1,
        name: "Cucumbers",
        expiry: 20,
        amount: 3,
        shelf: "Produce",
        storage: "Fridge",
    }
]

const fakeNutritionDB = [
    {
        id: 1,
        nutrient: "Calories",
        amount: 200,
    },
    {
        id: 2,
        nutrient: "Protein",
        amount: 200,
    },
    {
        id: 3,
        nutrient: "Carbs",
        amount: 200,
    },
]

const FoodInfo = ({ itemDatabase, nutritionDatabase }) => {

    return <Container>

        {itemDatabase.map(o => <Header>
            <div className="food_name">{o.name}</div>
            <div className="expiry_date">
                <div className="expiry">expires in {o.expiry} days</div>
                <div className="dot"></div>
            </div>
        </Header>)}

        <Macros>
            <div>
                <div className="macro_number">10</div>
                <div className="macro_name">Protein</div>
            </div>
            <div className="middle">
                <div className="macro_number">20</div>
                <div className="macro_name">Carbs</div>
            </div>
            <div>
                <div className="macro_number">30</div>
                <div className="macro_name">Fat</div>
            </div>
        </Macros>

        {itemDatabase.map(o => <StorageInfo>
            <div className="info_cont">
                <div className="info_header">Amount</div>
                <div className="info_text">{o.amount} items are currently stored</div>
            </div>
            <div className="info_cont">
                <div className="info_header">Item Storage</div>
                <div className="info_text">Find it in the {o.storage}</div>
            </div>
            <div className="info_cont">
                <div className="info_header">Shelf</div>
                <div className="info_text">Find it on your {o.shelf} Shelf</div>
            </div>
        </StorageInfo>)}

        <Nutrition>
            <div className="nutrition_head">
                Nutrition Facts
            </div>
            {nutritionDatabase.map(o => <div>
                <div className="dark_grey">
                    <div>{o.nutrient}</div>
                    <div>{o.amount} g</div>
                </div>
                <div className="light_grey">
                    <div>{o.nutrient}</div>
                    <div>{o.amount} g</div>
                </div>
            </div>)}
        </Nutrition>

    </Container >
}

FoodInfo.defaultProps = {
    itemDatabase: fakeItemDB,
    nutritionDatabase: fakeNutritionDB,
}

export default FoodInfo;