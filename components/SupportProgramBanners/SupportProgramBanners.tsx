import useSupportProgramBanners from './SupportProgramBanners.hooks';

function SupportProgramBanners() {
  const query = useSupportProgramBanners();
  console.log(query);
  return null;
}

export default SupportProgramBanners;
