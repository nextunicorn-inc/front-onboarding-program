import { render, screen } from '@testing-library/react';
import CTASection from './CTASection';
import { DESCRIPTIONS, HREF, CTA_TEXT } from './CTASection.constants';

describe('<CTASection />', () => {
  render(<CTASection />);

  it('should be written in correct descriptions', () => {
    DESCRIPTIONS.forEach((description) =>
      expect(screen.getByText(description)).toBeInTheDocument(),
    );
  });

  it('should be attached correct external link', () => {
    const anchor = screen.getByRole('link', { name: CTA_TEXT });
    expect(anchor).toHaveAttribute('href', HREF);
  });
});
