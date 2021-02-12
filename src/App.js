import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home.js';
import Sort from './pages/Sort.js';
import AddItem from './pages/AddItem';
import Item from './pages/Item.js';
import AddShelf from './pages/AddShelf.js';
import Shelf from './pages/Shelf.js';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>

            <Route exact path="/" component={Home} />
            <Route exact path="/sort" component={Sort} />
            <Route exact path="/item/:id" component={Item} />
            <Route exact path="/add-item" component={AddItem} />
            <Route exact path="/shelf/:id" component={Shelf} />
            <Route exact path="/add-shelf" component={AddShelf} />

          </Switch>
        )}
      />
    </Router >
  );
}

export default App;
