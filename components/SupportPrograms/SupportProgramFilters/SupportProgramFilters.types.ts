import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../../graphql';

type WithAll<T> = T | 'all';

export type SupportProgramTypes = WithAll<SupportProgramTypeEnum>[];
export type Areas = WithAll<AreaEnum>[];
export type TargetCompanyAges = WithAll<TargetCompanyAgeEnum>[];
