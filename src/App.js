import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchterm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
      {/* <h1>Let's do a YouTube clone.</h1> */}
    </div>
  );
}

export default App;
