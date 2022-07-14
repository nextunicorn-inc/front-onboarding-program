import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../../graphql';

export type WithAll<T> = T | 'all';

export type SupportProgramTypes = WithAll<SupportProgramTypeEnum>[];

export type FilterOptionsQuery = {
  filterOptions: {
    areas: Array<AreaEnum>;
    targetCompanyAges: Array<TargetCompanyAgeEnum>;
    types: Array<SupportProgramTypeEnum>;
    hosts: Array<{ id: string; meta: { name: string } }>;
  };
};

export type Area = FilterOptionsQuery['filterOptions']['areas'][number];
export type TargetCompanyAge = FilterOptionsQuery['filterOptions']['targetCompanyAges'][number];
export type Type = FilterOptionsQuery['filterOptions']['types'][number];
export type Host = FilterOptionsQuery['filterOptions']['hosts'][number];
