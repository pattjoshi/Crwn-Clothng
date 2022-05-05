import React from "react";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopComponent";
import CheckoutPage from "./pages/checkout/CheckOut";
import HeaderComponent from "./component/Header/HeaderComponent";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";
import { setCurrentUser } from "./redux/user/UserActions";
import { selectCurrentUser } from "./redux/user/UserSelectors";
import { GlobalStyle } from "./global.styles";
import Error404 from "./pages/error/Error404";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          CheckOut
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // if the uer is sign in not show the sign in component
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// displayName: "Ompraksh Pattjoshi"
// email: "omprakashpattjoshi123@gmail.com"
