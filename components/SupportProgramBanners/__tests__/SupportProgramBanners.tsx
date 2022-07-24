import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { SupportProgramBanners } from '../index';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<SupportProgramBanners />', () => {
  it('renders correctly', async () => {
    render(<SupportProgramBanners />, { wrapper: createWrapper() });
    await waitFor(() => {
      screen
        .getAllByLabelText('지원프로그램 배너 타이틀')
        .forEach((el) => expect(el).toBeInTheDocument());
    });
  });
});
