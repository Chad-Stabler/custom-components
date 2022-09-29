import { render, screen } from '@testing-library/react';
import {
  InputControl,
} from './FormControls.jsx';

test('input control should work', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toEqual('username');
  expect(inputControl.placeholder).toEqual('Your user name');
  expect(inputControl.required).toEqual(true);
});
