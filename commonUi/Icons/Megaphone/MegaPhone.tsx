import MegaphoneSVG from './megaphone.svg';

type Props = {
  color?: string;
};

function Megaphone({ color = 'var(--color-naturalgray8)' }: Props) {
  return <MegaphoneSVG color={color} />;
}
export default Megaphone;
