import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('hi', () => {
  render(<Footer />);
  screen.debug();
});
