import { render, screen } from '@testing-library/react';
import CTASection from './CTASection';
import { DESCRIPTIONS, HREF, CTA_TEXT } from './CTASection.constants';

describe('<CTASection />', () => {
  it('should be written in correct descriptions', () => {
    render(<CTASection />);
    DESCRIPTIONS.forEach((description) =>
      expect(screen.getByText(description)).toBeInTheDocument(),
    );
  });

  it('should be attached correct external link', () => {
    render(<CTASection />);
    const anchor = screen.getByRole('link', { name: new RegExp(CTA_TEXT, 'i') });
    expect(anchor).toHaveAttribute('href', HREF);
  });
});
