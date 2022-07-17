import Close20 from './close20.svg';
import Close24 from './close24.svg';
import Close40 from './close40.svg';
import { DEFAULT_COLOR } from '../Icons.constants';

const Icons = {
  20: Close20,
  24: Close24,
  40: Close40,
} as const;

type Size = keyof typeof Icons;

type Props = {
  size: Size;
  color?: string;
};

function Close({ size, color = DEFAULT_COLOR }: Props) {
  const Component = Icons[size];
  return <Component width={size} height={size} color={color} />;
}

export default Close;
