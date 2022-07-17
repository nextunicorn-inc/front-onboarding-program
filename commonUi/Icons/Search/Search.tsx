import Search20 from './search20.svg';
import Search24 from './search24.svg';
import Search32 from './search32.svg';
import Search40 from './search40.svg';

const Icons = {
  20: Search20,
  24: Search24,
  32: Search32,
  40: Search40,
} as const;

type Sizes = keyof typeof Icons;
type Props = {
  size?: Sizes;
  color?: string;
};

function Search({ size = 24, color = 'var(--color-naturalgray8)' }: Props) {
  const Component = Icons[size];
  return <Component color={color} />;
}

export default Search;
