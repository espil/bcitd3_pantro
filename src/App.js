import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home.js';
import Sort from './pages/Sort.js';
import AddItem from './pages/AddItem';
import Item from './pages/Item.js';
import AddShelf from './pages/AddShelf.js';
import Shelf from './pages/Shelf.js';
import ListedItem from "./comps/ListedItem"

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/sort" component={Sort}/>
        <Route exact path="/item/" component={Item}/>
        <Route exact path="/add-item" component={AddItem}/>
        <Route exact path="/shelf" component={Shelf}/>
        <Route exact path="/add-shelf" component={AddShelf}/>

      </Switch>
    </Router >
  );
}

export default App;
