import {render, screen} from '@testing-library/react';
import Heading from './index';

test('should be able to render a heading', () => {
  render(<Heading>Hello world</Heading>);
  
  expect(screen.getByRole('heading'))
              .toBeInTheDocument();

  expect(screen.getByText(/hello world/i))
              .toBeInTheDocument();


});

