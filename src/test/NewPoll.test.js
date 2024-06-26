import { fireEvent, render, screen } from '@testing-library/react';
import NewPoll from '../components/NewPoll';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/configureStore";

describe('NewPoll', () => {
  it('Change value for input', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll/>
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot()

    const inputOptionOne = component.getByTestId('first-option').querySelector('input');
    const inputOptionTwo = component.getByTestId('second-option').querySelector('input');

    expect(inputOptionOne).toBeDefined();
    expect(inputOptionTwo).toBeDefined();

    fireEvent.change(inputOptionOne,{ target: { value: 'OptionOne' } });
    expect(inputOptionOne.value).toBe("OptionOne");

    fireEvent.change(inputOptionTwo,{ target: { value: 'OptionTwo' } });
    expect(inputOptionTwo.value).toBe("OptionTwo");
  })

})
