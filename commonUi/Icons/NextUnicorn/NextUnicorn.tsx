import NextUnicornSVG from './nextunicorn.svg';
import { DEFAULT_COLOR } from '../Icons.constants';

type Props = {
  primary?: boolean;
  color?: string;
};

function NextUnicornLogo({ primary = true, color = DEFAULT_COLOR }: Props) {
  const iconColor = primary ? 'var(--color-unicornblue7)' : color;
  return <NextUnicornSVG color={iconColor} />;
}

export default NextUnicornLogo;
