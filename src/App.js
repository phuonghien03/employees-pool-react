import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Polls from "./components/Polls";
import NewPoll from "./components/NewPoll";
import Leader from "./components/Leader";
import { initData } from "./store/actions/shared";
import { connect } from "react-redux";
import NotFound from "./components/NotFound";
import ShowQuestion from "./components/ShowQuestion";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

const App = ({ initData }) => {
  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Polls} />
        <PrivateRoute path="/add" component={NewPoll} />
        <PrivateRoute path="/leaderboard" component={Leader} />
        <PrivateRoute
          path="/questions/:question_id"
          component={ShowQuestion}
        />
        <PrivateRoute component={NotFound} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authUser && state.authUser.user,
});

export default connect(mapStateToProps, { initData })(App);
