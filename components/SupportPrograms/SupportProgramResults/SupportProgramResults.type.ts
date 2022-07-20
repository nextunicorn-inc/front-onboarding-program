import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '@/graphql';

export type SupportProgramsQuery = {
  supportPrograms: {
    data: Array<{
      startAt: string;
      endAt: string | undefined;
      areas: Array<AreaEnum>;
      name: string;
      targetCompanyAges: Array<TargetCompanyAgeEnum>;
      type: SupportProgramTypeEnum;
      outerApplyLink: string | undefined;
      supportProgramCompany: { name: string };
    }>;
    paging: {
      limit: number;
      totalPages: number;
      totalElements: number;
      openedElements: number;
      current: number;
    };
  };
};

export type SupportProgramDataType = {
  startAt: string;
  endAt: string | undefined;
  areas: Array<AreaEnum>;
  name: string;
  targetCompanyAges: Array<TargetCompanyAgeEnum>;
  type: SupportProgramTypeEnum;
  outerApplyLink: string | undefined;
  supportProgramCompany: { name: string };
};
