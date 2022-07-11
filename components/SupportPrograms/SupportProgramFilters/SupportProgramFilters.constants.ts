import { SupportProgramTypeEnum } from '../../../graphql';

/**
 * These will be removed when server is restored.
 */

export const TYPE_MOCKUP = [
  SupportProgramTypeEnum.Sl,
  SupportProgramTypeEnum.Snl,
  SupportProgramTypeEnum.Snlp,
] as const;

/*
 *
 * This will be used for default value
 * */

export const DEFAULT = ['all'] as const;
