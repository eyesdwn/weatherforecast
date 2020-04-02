import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ForecastPage from "../../pages/ForecastPage/ForecastPage";
import UsefulLinksPage from "../../pages/UsefulLinksPage/UsefulLinksPage";
import HourlyPage from "../../pages/HourlyPage/HourlyPage";
import FutureForecastPage from "../../pages/7DaysPage/7DaysPage";
import style from "./app.module.css";

class App extends Component {
  render() {
    return (
      <>
        <div className={style.appHeader}>
          <Logo />
          <SearchBar />
        </div>
        <div className={style.main}>
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
