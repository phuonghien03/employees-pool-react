import React, { useState } from "react";
import {
  Segment,
  Header,
  Grid,
  Form,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { setAuthUser } from "../store/actions/authUser";
import { withRouter } from "react-router-dom";
import GridContainer from "./GridContainer";

const Login = ({ users, setAuthUser, history, location }) => {
  const [userId, setUserId] = useState("");
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    setAuthUser(userId);
    history.push(location.pathname);
  };

  const onChange = (e, { value }) => {
    setUserId(value);
    setDisabled(false);
  };

  return (
    <React.Fragment>
      <GridContainer>
        <Segment.Group>
          <Header as="h4" block attached="top" textAlign="center">
            <Header.Content>
              Employees Pools
            </Header.Content>
          </Header>
          <Grid padded textAlign="center">
            <Grid.Row>
              <Grid.Column width={16}>
                <Form onSubmit={onSubmit}>
                  <Header as="h2" color="blue" data-testid="login-heading">
                    Sign In
                  </Header>
                  <Form.Dropdown
                    placeholder="Select a employee"
                    fluid
                    selection
                    scrolling
                    value={userId}
                    required
                    onChange={onChange}
                    data-testid="userId"
                    options={
                      (users &&
                        users.map((user) => ({
                          key: user.id,
                          text: user.name,
                          value: user.id,
                          image: { avatar: true, src: user.avatarURL },
                        }))) ||
                      []
                    }
                  />
                  <Form.Button
                    content="Login"
                    data-testid="submit"
                    primary
                    fluid
                    disabled={disabled}
                  />
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </GridContainer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    authUser: state.authUser && state.authUser.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthUser: (userId) => dispatch(setAuthUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
