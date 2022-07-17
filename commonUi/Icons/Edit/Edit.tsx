import EditSVG from './edit.svg';
import { DEFAULT_COLOR } from '../Icons.constants';

type Props = {
  color?: string;
};

function Edit({ color = DEFAULT_COLOR }: Props) {
  return <EditSVG color={color} />;
}

export default Edit;
