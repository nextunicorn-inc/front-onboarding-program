import { dequal } from 'dequal';
import type { WithAll } from './SupportProgramFilters';

export function identity<T>(item: T) {
  return item;
}

export function contain<T>(list: WithAll<T>[], item: T) {
  return list.find((v) => dequal(v, item)) !== undefined;
}
