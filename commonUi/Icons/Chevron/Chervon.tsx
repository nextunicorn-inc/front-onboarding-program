import Down from './down.svg';
import Up from './up.svg';
import Left from './left.svg';
import Right from './right.svg';

import { DEFAULT_COLOR } from '../Icons.constants';

const Icons = {
  Up,
  Down,
  Left,
  Right,
} as const;

type direction = keyof typeof Icons;

type Props = {
  direction: direction;
  size: 16 | 20 | 24;
  color?: string;
};

function Chervon({ direction, size, color = DEFAULT_COLOR }: Props) {
  const Component = Icons[direction];
  return <Component width={size} height={size} color={color} />;
}

export default Chervon;
