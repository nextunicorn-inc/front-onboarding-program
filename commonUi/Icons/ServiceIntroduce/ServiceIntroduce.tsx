import ServiceSVG from './service.svg';

type Props = {
  color?: string;
};

function ServiceIntroduce({ color = 'var(--color-naturalgray8)' }: Props) {
  return <ServiceSVG color={color} />;
}

export default ServiceIntroduce;
