import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import IconSelect from 'comps/IconSelect';
import Input from 'comps/Input';
import BrBut from "../comps/BackButtonC/index.js";
import AddButton from '../comps/AddButton/index.js';
import shelf from '../icons/shelf.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const Container = styled.div`
display:flex;
flex-direction:column;
width: 323px;
height: 730px;
padding:26px;
.header {
    font-family: Pier Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin:52px 0px 26px 0px;
}
`;

const AddShelf = () => {

    const HandleFormComplete = (name, description) => {
        console.log(name, description);

        var resp = axios.post("https://pantro-db.herokuapp.com/api.Items")
    }
    const [amount, setAmount] = useState("null");

    
  const [name, setName] = useState("");
    return <Container>
        <BrBut></BrBut>
        <div className="header">Add a Shelf</div>
        <Input type="text" header="Shelf Name" onChange={(e)=>{
      setName(e.target.value);
    }}/>
    <Input type="text" header="Description" onChange={(e)=>{
      setAmount(e.target.value);
    }}/>
        <IconSelect />
        <Link to="/">
            <AddButton text="Add Shelf" image={shelf} />
        </Link>
    </Container>
}

export default AddShelf; 