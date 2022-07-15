import Thunder13 from './thunder13.svg';
import Thunder15 from './thunder15.svg';
import Thunder26 from './thunder26.svg';

import Thunder16 from './thunder16.svg';
import Thunder20 from './thunder20.svg';
import Thunder32 from './thunder32.svg';

const Icons = {
  13: Thunder13,
  15: Thunder15,
  26: Thunder26,
} as const;

type Size = keyof typeof Icons;
type Props = {
  size?: Size;
};

export function Thunder({ size = 15 }: Props) {
  const Component = Icons[size];
  return <Component />;
}

const IconsWithWrapper = {
  16: Thunder16,
  20: Thunder20,
  32: Thunder32,
};

type SizeWithWrapper = keyof typeof IconsWithWrapper;
type PropsWithWrapper = {
  size?: SizeWithWrapper;
};

export function ThunderWithWrapper({ size = 20 }: PropsWithWrapper) {
  const Component = IconsWithWrapper[size];

  return <Component />;
}
