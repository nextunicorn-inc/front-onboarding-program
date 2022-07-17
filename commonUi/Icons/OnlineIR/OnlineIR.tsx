import OnlineIRSVG from './onlineIR.svg';

type Props = {
  color?: string;
};

function OnlineIR({ color = 'var(--color-naturalgray8)' }: Props) {
  return <OnlineIRSVG color={color} />;
}

export default OnlineIR;
