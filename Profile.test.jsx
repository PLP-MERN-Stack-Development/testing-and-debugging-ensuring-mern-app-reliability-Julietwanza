import { render, screen } from '@testing-library/react';
import Profile from './Profile';

jest.mock('../hooks/useFetch', () => jest.fn(() => ({ name: 'Alice' })));

test('shows user name', () => {
  render(<Profile />);
  expect(screen.getByTestId('username')).toHaveTextContent('Alice');
});
