import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </header>
    </div>
  );
}

export default App;
