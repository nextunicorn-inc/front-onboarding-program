import Inactive from './inactive.svg';
import Active from './active.svg';

const getIcon = (active: boolean) => (active ? Active : Inactive);

type Props = {
  active?: boolean;
  color?: string;
};

function Check({ active = false, color = 'var(--color-naturalgray8)' }: Props) {
  const Component = getIcon(active);
  return <Component color={color} />;
}

export default Check;
