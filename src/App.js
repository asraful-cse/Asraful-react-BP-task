import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import AppsContent from "./components/SharePage/AppsContent";
import GitHubMarket from "./components/SharePage/GitHubMarket";
import Overview from "./components/SharePage/Overview";
import ThankTeamBP from "./components/SharePage/ThankTeamBP";
import WebHooks from "./components/SharePage/WebHooks";

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
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/home/overview">
              <Overview />
            </Route>
            <Route path="/home/webHooks">
              <WebHooks />
            </Route>
            <Route path="/home/appsContent">
              <AppsContent />
            </Route>
            <Route path="/home/gitHubMarket">
              <GitHubMarket />
            </Route>
            <Route path="/home/thanksBP">
              <ThankTeamBP />
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
