import PlusSVG from './plus.svg';
import { DEFAULT_COLOR } from '../Icons.constants';

type Props = {
  color?: string;
};

function Plus({ color = DEFAULT_COLOR }: Props) {
  return <PlusSVG color={color} />;
}

export default Plus;
