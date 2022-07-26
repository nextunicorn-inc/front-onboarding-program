import { render, screen, waitFor } from '@testing-library/react';
import { createQueryClientWrapper } from 'test-utils';
import { SupportProgramBanners } from '../index';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<SupportProgramBanners />', () => {
  it('renders correctly', async () => {
    render(<SupportProgramBanners />, { wrapper: createQueryClientWrapper() });
    await waitFor(() => {
      screen
        .getAllByLabelText('지원프로그램 배너 타이틀')
        .forEach((el) => expect(el).toBeInTheDocument());
    });
  });
});
