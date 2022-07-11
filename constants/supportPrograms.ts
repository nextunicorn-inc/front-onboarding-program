import { SupportProgramTypeEnum, AreaEnum, TargetCompanyAgeEnum } from '../graphql/types';

export const SUPPORT_PROGRAM_TYPE_TEXTS = {
  [SupportProgramTypeEnum.Snl]: '간편 신청',
  [SupportProgramTypeEnum.Sl]: '외부 신청',
  [SupportProgramTypeEnum.Snlp]: '일반 신청',
};

export const TARGET_COMPANY_AGE_TEXTS = {
  [TargetCompanyAgeEnum.Nm]: '무관',
  [TargetCompanyAgeEnum.Ps]: '예비창업자',
  [TargetCompanyAgeEnum.U3]: '3년차 이하',
  [TargetCompanyAgeEnum.U7]: '7년차 이하',
  [TargetCompanyAgeEnum.M8]: '8년차 이상',
};

export const AREA_TEXTS = {
  [AreaEnum.Co]: '협업',
  [AreaEnum.Cz]: '사업화',
  [AreaEnum.Fs]: '시설·공간·보육',
  [AreaEnum.Rd]: '연구·개발',
  [AreaEnum.La]: '융자',
  [AreaEnum.Ed]: '창업 교육',
  [AreaEnum.Om]: '판로·해외진출',
  [AreaEnum.En]: '행사·네트워크',
};
