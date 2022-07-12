import { AreaEnum, SupportProgramTypeEnum, TargetCompanyAgeEnum } from '../../../graphql';

export type WithAll<T> = T | 'all';

export type SupportProgramTypes = WithAll<SupportProgramTypeEnum>[];
