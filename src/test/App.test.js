import { render } from '@testing-library/react';
import App from '../App';
import {setAuthUser} from '../store/actions/authUser'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/configureStore";

describe('App', () => {
  it('Should initialize the app', () => {
    const renderedComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    expect(renderedComponent).toBeDefined();
    expect(renderedComponent).toMatchSnapshot()
  })
})


describe("NavBar Component", () => {
  it("Should show navbar when logged in successfully", () => {
    store.dispatch(setAuthUser("sarahedo"))

    const renderedComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    const navbarElement = renderedComponent.getByTestId("navbar");

    expect(renderedComponent).toBeDefined();
    expect(navbarElement).toBeDefined();
  })
})