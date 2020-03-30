import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";
import AboutPage from "../../pages/About/AboutPage";
import ForecastPage from "../../pages/ForecastPage/ForecastPage";
import UsefulLinksPage from "../../pages/UsefulLinksPage/UsefulLinksPage";
import HourlyPage from "../../pages/HourlyPage/HourlyPage";
import FutureForecastPage from "../../pages/7DaysPage/7DaysPage";

const divStyle = {
  display: "flex",
  padding: "200px 30px"
};

class App extends Component {
  render() {
    return (
      <>
        <Logo />
        <SearchBar />
        <div style={divStyle}>
          <Nav />
          <Switch>
            <Route exact path="/" component={ForecastPage} />
            <Route exact path="/hourly" component={HourlyPage} />
            <Route
              exact
              path="/7_days_forecast"
              component={FutureForecastPage}
            />
            <Route path="/about" component={AboutPage} />
            <Route path="/useful_links" component={UsefulLinksPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
