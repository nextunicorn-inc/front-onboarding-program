import NextUnicornSVG from './nextunicorn.svg';
import { DEFAULT_COLOR } from '../Icons.constants';

type Props = {
  primary?: boolean;
};

function NextUnicornLogo({ primary = true }: Props) {
  const color = primary ? 'var(--color-unicornblue7)' : DEFAULT_COLOR;
  return <NextUnicornSVG color={color} />;
}

export default NextUnicornLogo;
