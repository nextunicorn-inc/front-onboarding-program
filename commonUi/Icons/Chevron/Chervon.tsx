import * as Chevron20 from './20';
import * as Chevron24 from './24';

import { DEFAULT_COLOR } from '../Icons.constants';

const Icons = {
  20: Chevron20,
  24: Chevron24,
};

type Direction = keyof typeof Chevron24;
type Size = keyof typeof Icons;

type Props = {
  direction: Direction;
  size: Size;
  color?: string;
};

function Chervon({ direction, size, color = DEFAULT_COLOR }: Props) {
  const Component = Icons[size][direction];
  return <Component width={size} height={size} color={color} />;
}

export default Chervon;
