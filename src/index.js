import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home.js';
import Sort from './pages/Sort.js';
import AddItem from './pages/AddItem';
import Item from './pages/Item.js';
import AddShelf from './pages/AddShelf.js';
import Shelf from './pages/Shelf.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sort" component={Sort} />
        <Route path="/item" component={Item} />
        <Route path="/add-item" component={AddItem} />
        <Route path="/shelf" component={Shelf} />
        <Route path="/add-shelf" component={AddShelf} />
      </Switch>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
