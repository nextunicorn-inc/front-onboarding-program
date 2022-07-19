import Inactive from './inactive.svg';
import Active from './active.svg';

// 20

const getIcon = (active: boolean) => (active ? Active : Inactive);

type Props = {
  active?: boolean;
  color?: string;
  size?: number;
};

function Check({ active = false, color = 'var(--color-naturalgray8)', size = 20 }: Props) {
  const Component = getIcon(active);
  return <Component color={color} width={size} height={size} />;
}

export default Check;
