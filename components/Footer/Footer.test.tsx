import { render, screen, within } from '@testing-library/react';
import Footer from './Footer';
import { LOGO_LABEL, NAVIGATIONS, SOCIAL_NETWORKS, POLICIES_OF_SERVICES } from './Footer.constants';

describe('<Footer />', () => {
  it('should show Logo with label correctly', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: new RegExp(LOGO_LABEL, 'i') })).toBeInTheDocument();
  });

  it('should show navigations, each of which has its own hierarchy', () => {
    render(<Footer />);

    NAVIGATIONS.forEach(({ title, routes }) => {
      const container = screen.getByRole('presentation', { name: title, exact: true });

      expect(
        screen.getByRole('heading', { level: 2, name: title, exact: true }),
      ).toBeInTheDocument();

      routes.forEach(({ title, href }) => {
        const link = within(container).getByRole('link', { name: title });
        expect(link).toHaveAttribute('href', href);
      });
    });
  });

  it('should show social network links correctly', () => {
    render(<Footer />);
    const navigationPrefix = '소셜네트워크';

    SOCIAL_NETWORKS.forEach(({ href, title }) => {
      expect(
        screen.getByRole('link', { name: new RegExp(`${navigationPrefix} - ${title}`, 'i') }),
      ).toHaveAttribute('href', href);
    });
  });

  it('should show term links correctly', () => {
    render(<Footer />);
    POLICIES_OF_SERVICES.forEach(({ href, title }) => {
      expect(screen.getByRole('link', { name: title })).toHaveAttribute('href', href);
    });
  });
});
