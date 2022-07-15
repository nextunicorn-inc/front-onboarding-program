import HamburgerSVG from './hamburger.svg';

type Props = {
  color?: string;
};

function Hamburger({ color = 'var(--color-naturalgray8)' }: Props) {
  return <HamburgerSVG color={color} />;
}
export default Hamburger;
