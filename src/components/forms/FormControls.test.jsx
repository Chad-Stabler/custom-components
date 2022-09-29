import { render, screen } from '@testing-library/react';
import {
  InputControl,
  SelectControl,
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

test('select control should render', async () => {
  render(
    <SelectControl label="Vehicle" name="vehicle" required>
      <option>Porsche</option>
      <option>Ferrari</option>
      <option>Lamborghini</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('Vehicle');
  expect(selectControl.name).toEqual('vehicle');
  expect(selectControl.required).toEqual(true);
  expect(selectControl.options.length).toEqual(3);
});
