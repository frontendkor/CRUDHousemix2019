import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row } from "react-materialize";

import fetchCatalog from "./actions/Catalog/fetchCatalog";
import getJWT from "./actions/Profile/getJWT";

import { ScrollTop } from "./components/ScrollTop/ScrollTop";

import Preloader from "./components/Preloader/Preloader";
import Modal from "./components/Modal/Modal";

import Nav from "./components/Nav/Nav";
import NavRight from "./components/NavRight/NavRight";

import SearchPage from "./pages/SearchPage/SearchPage";
import BanerPage from "./pages/BanerPage/BanerPage";
import PizzaPage from "./pages/CatalogPages/PizzaPage";
import SetPage from "./pages/CatalogPages/SetPage";
import BurgerPage from "./pages/CatalogPages/BurgerPage";
import DrinksPage from "./pages/CatalogPages/DrinksPage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import CartPage from "./pages/CartPage/CartPage";
import BonusesPage from "./pages/BonusesPage/BonusesPage";

import DeliveryTerms from "./components/DeliveryTerms/DeliveryTerms";

import Footer from "./components/Footer/Footer";

import Logo from "./components/Logo/Logo";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthorizationFormContainer from "./components/Forms/AuthorizationForm/AuthorizationFormContainer";
import RegistrationFormContainer from "./components/Forms/RegistrationForm/RegistrationFormContainer";
import SettingsFormContainer from "./components/Forms/SettingsForm/SettingsFormContainer";

class App extends Component {
  componentDidMount() {
    const { fetchCatalog, getJWT } = this.props;
    fetchCatalog();
    getJWT();
  }
  render() {
    const { sum } = this.props;
    return (
      <Router
      // basename={
      //   document.location.host === `frontendkor.github.io`
      //     ? `/Housemix2019`
      //     : ``
      // }
      >
        <Preloader />
        <Modal />
        <div className="App">
          <header>
            <Nav />
            <NavRight sum={sum} classis="NavRight" />
            <Link to="/" className="HeaderLogo" onClick={ScrollTop}>
              <Logo />
            </Link>
          </header>
          <div className="content">
            <Route exact path="/" component={BanerPage} />
            <Container>
              <Switch>
                <Route path="/search" component={SearchPage} />
                <Route path="/pizza" component={PizzaPage} />
                <Route path="/sets" component={SetPage} />
                <Route path="/burgers" component={BurgerPage} />
                <Route path="/drinks" component={DrinksPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/delivery-payment" component={DeliveryPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route
                  path="/authorization"
                  component={AuthorizationFormContainer}
                />
                <Route
                  path="/registration"
                  component={RegistrationFormContainer}
                />
                <Route path="/settings" component={SettingsFormContainer} />
                <Route path="/bonuses" component={BonusesPage} />
              </Switch>
              <Row>
                <DeliveryTerms />
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    sum: store.cartData.sum,
    isAuth: store.profile.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCatalog: () => dispatch(fetchCatalog()),
    getJWT: () => dispatch(getJWT())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
