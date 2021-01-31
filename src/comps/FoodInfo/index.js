import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-top:100px;
width: 375px;
height: 750px;
border: 1px solid red;
border-radius: 33.5px 33.5px 0px 0px;
`

const Header = styled.div`

`

const Macros = styled.div`
width:auto;
border: 1px solid red;
display:flex;
flex-direction:row;
justify-content:center;
margin: 26px 0;
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

`

const Nutrition = styled.div`

`



const FoodInfo = () => {

    return <Container>
        <StorageInfo>
            <div>
                <div></div>
                <div></div>
            </div>
        </StorageInfo>
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
    </Container >
}

FoodInfo.defaultProps = {

}

export default FoodInfo;