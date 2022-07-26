import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { AREA_TEXTS } from 'constants/supportPrograms';
import { createTinyReplaceRouter, createWholeWrapper } from 'test-utils';
import supportProgramFiltersDB from '__mocks__/server/db/supportProgramFilters.json';

import { AreaEnum } from '@/graphql';
import { AreaFilter } from '../index';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

const ALL = '전체';

describe('<AreaFilter />', () => {
  const user = userEvent.setup({ delay: null });
  it('should show texts and toggle values', async () => {
    const mockRouter = createTinyReplaceRouter({});
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { rerender } = render(<AreaFilter />, { wrapper: createWholeWrapper() });

    const AREA_TEXTS_LIST = supportProgramFiltersDB.filterOptions.areas.map((v) => {
      const internalArea = v as AreaEnum;
      return AREA_TEXTS[internalArea];
    });

    await waitFor(() => {
      AREA_TEXTS_LIST.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });

    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);
    await user.click(screen.getByRole('button', { name: AREA_TEXTS_LIST[0] }));
    rerender(<AreaFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(AREA_TEXTS_LIST[0]);

    await user.click(screen.getByRole('button', { name: ALL }));
    rerender(<AreaFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);

    let totalSelectedButtonsExceptAll = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const text of AREA_TEXTS_LIST) {
      // eslint-disable-next-line no-await-in-loop
      await user.click(screen.getByRole('button', { name: text }));
      rerender(<AreaFilter />);
      expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(
        // eslint-disable-next-line no-plusplus
        ++totalSelectedButtonsExceptAll,
      );
    }

    await user.click(screen.getByRole('button', { name: ALL }));
    rerender(<AreaFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);
    expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(1);
    screen.debug();
  });
});
