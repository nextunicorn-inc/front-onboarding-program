import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';
import { createTinyReplaceRouter, createWholeWrapper } from 'test-utils';
import supportProgramFiltersDB from '__mocks__/server/db/supportProgramFilters.json';

import { TargetCompanyAgeEnum } from '@/graphql';
import { AgeFilter } from '../index';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

const ALL = '전체';

describe('<AgeFilter />', () => {
  const user = userEvent.setup({ delay: null });
  it('should show texts and toggle values', async () => {
    const mockRouter = createTinyReplaceRouter({});
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { rerender } = render(<AgeFilter />, { wrapper: createWholeWrapper() });

    const TARGET_COMPANY_AGE_TEXTS_LIST =
      supportProgramFiltersDB.filterOptions.targetCompanyAges.map((v) => {
        const internalTargetCompanyAge = v as TargetCompanyAgeEnum;
        return TARGET_COMPANY_AGE_TEXTS[internalTargetCompanyAge];
      });

    await waitFor(() => {
      TARGET_COMPANY_AGE_TEXTS_LIST.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });

    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);
    await user.click(screen.getByRole('button', { name: TARGET_COMPANY_AGE_TEXTS_LIST[0] }));
    rerender(<AgeFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(
      TARGET_COMPANY_AGE_TEXTS_LIST[0],
    );

    await user.click(screen.getByRole('button', { name: ALL }));
    rerender(<AgeFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);

    let totalSelectedButtonsExceptAll = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const text of TARGET_COMPANY_AGE_TEXTS_LIST) {
      // eslint-disable-next-line no-await-in-loop
      await user.click(screen.getByRole('button', { name: text }));
      rerender(<AgeFilter />);
      expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(
        // eslint-disable-next-line no-plusplus
        ++totalSelectedButtonsExceptAll,
      );
    }

    await user.click(screen.getByRole('button', { name: ALL }));
    rerender(<AgeFilter />);
    expect(screen.getByRole('button', { pressed: true })).toHaveTextContent(ALL);
    expect(screen.getAllByRole('button', { pressed: true })).toHaveLength(1);
    screen.debug();
  });
});
