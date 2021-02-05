import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './pages/index';
import Home from './pages/Home.js';
import AddItem from './pages/AddItem';
import Item from './pages/Item.js';
import Sort from './pages/Sort.js';
import ProShelf from './pages/Shelf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sort" component={Sort} />
        <Route path="/item" component={Item} />
        <Route path="/add-item" component={AddItem} />
        <Route path="/shelf" component={AddItem} />
      </Switch>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
