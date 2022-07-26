import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, waitFor, act } from '@testing-library/react';

import { Indicator } from '../Indicator';
import { INTERVAL_DELAY } from '../SupportProgramBanners.constants';

function Comp() {
  const [index, setIndex] = useState(0);
  const totalCount = 5;
  const move = (type: 'next' | 'prev') => {
    setIndex((prev) => {
      if (type === 'next' && prev === 4) {
        return 0;
      }
      if (type === 'prev' && prev === 0) {
        return 4;
      }
      return type === 'next' ? prev + 1 : prev - 1;
    });
  };

  return <Indicator currentIndex={index} totalSlides={totalCount} onClick={move} />;
}

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<Indicator />', () => {
  const user = userEvent.setup({ delay: null });
  const clickAndWait = async (element: HTMLElement, cb: () => void) => {
    await user.click(element);
    await waitFor(cb);
  };
  const advanceTimeAndAssertion = async (delay: number, cb: () => void) => {
    act(() => {
      jest.advanceTimersByTime(delay);
    });
    await waitFor(cb);
  };

  it('should initially show first and total slides', () => {
    render(<Comp />);
    const buttons = screen.getAllByRole('button', { name: /지원프로그램/i });
    expect(buttons).toHaveLength(2);
    expect(screen.getByLabelText('지원프로그램 배너 현황')).toHaveTextContent('1 / 5');
  });

  it('should show next slide and first when click next button', async () => {
    render(<Comp />);
    const container = screen.getByLabelText('지원프로그램 배너 현황');
    const rightButton = screen.getByRole('button', { name: /다음 지원프로그램 배너 보기/i });
    expect(container).toHaveTextContent('1 / 5');

    await clickAndWait(rightButton, () => expect(container).toHaveTextContent('2 / 5'));
    await clickAndWait(rightButton, () => expect(container).toHaveTextContent('3 / 5'));
    await clickAndWait(rightButton, () => expect(container).toHaveTextContent('4 / 5'));
    await clickAndWait(rightButton, () => expect(container).toHaveTextContent('5 / 5'));
    await clickAndWait(rightButton, () => expect(container).toHaveTextContent('1 / 5'));
  });

  it('should previous next slide and last when click previous button', async () => {
    render(<Comp />);
    const container = screen.getByLabelText('지원프로그램 배너 현황');
    const leftButton = screen.getByRole('button', { name: /이전 지원프로그램 배너 보기/i });
    expect(container).toHaveTextContent('1 / 5');

    await clickAndWait(leftButton, () => expect(container).toHaveTextContent('5 / 5'));
    await clickAndWait(leftButton, () => expect(container).toHaveTextContent('4 / 5'));
    await clickAndWait(leftButton, () => expect(container).toHaveTextContent('3 / 5'));
    await clickAndWait(leftButton, () => expect(container).toHaveTextContent('2 / 5'));
    await clickAndWait(leftButton, () => expect(container).toHaveTextContent('1 / 5'));
  });

  it('should automatically show next slide', async () => {
    const FINISH_DELAY = INTERVAL_DELAY * 100;
    render(<Comp />);
    await advanceTimeAndAssertion(FINISH_DELAY, () =>
      expect(screen.getByLabelText('지원프로그램 배너 현황')).toHaveTextContent('2 / 5'),
    );
    await advanceTimeAndAssertion(FINISH_DELAY, () =>
      expect(screen.getByLabelText('지원프로그램 배너 현황')).toHaveTextContent('3 / 5'),
    );
    await advanceTimeAndAssertion(FINISH_DELAY, () =>
      expect(screen.getByLabelText('지원프로그램 배너 현황')).toHaveTextContent('4 / 5'),
    );
    await advanceTimeAndAssertion(FINISH_DELAY, () =>
      expect(screen.getByLabelText('지원프로그램 배너 현황')).toHaveTextContent('5 / 5'),
    );
    await advanceTimeAndAssertion(FINISH_DELAY, () =>
      expect(screen.getByLabelText('지원프로그램 배너 현황')).toHaveTextContent('1 / 5'),
    );
  });
});
