import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { createTinyReplaceRouter, createWholeWrapper } from 'test-utils';
import supportProgramFiltersDB from '__mocks__/server/db/supportProgramFilters.json';
import { HostFilter } from '../index';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

const ALL = '전체';

describe('<HostFilter />', () => {
  const user = userEvent.setup({ delay: null });
  it('should show texts and toggle values', async () => {
    const mockRouter = createTinyReplaceRouter({});
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { rerender } = render(<HostFilter />, { wrapper: createWholeWrapper() });

    const HOST_NAMES = supportProgramFiltersDB.filterOptions.hosts.map((v) => {
      return v.meta.name;
    });

    await waitFor(() => {
      HOST_NAMES.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });

    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);
    await user.click(screen.getByRole('button', { name: HOST_NAMES[0] }));

    rerender(<HostFilter />);

    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(HOST_NAMES[0]);

    await user.click(screen.getByRole('button', { name: ALL }));
    rerender(<HostFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);

    let totalSelectedButtonsExceptAll = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const text of HOST_NAMES) {
      // eslint-disable-next-line no-await-in-loop
      await user.click(screen.getByRole('button', { name: text }));
      rerender(<HostFilter />);
      expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(
        // eslint-disable-next-line no-plusplus
        ++totalSelectedButtonsExceptAll,
      );
    }

    await user.click(screen.getByRole('button', { name: ALL }));
    rerender(<HostFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);
    expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(1);
  });
});
