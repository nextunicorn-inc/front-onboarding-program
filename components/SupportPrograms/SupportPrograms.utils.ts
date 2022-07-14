import { dequal } from 'dequal';
import type { WithAll } from './SupportProgramFilters';

export function identity<T>(item: T) {
  return item;
}
export function noop(...args: any[]) {
  return undefined;
}

export function contain<T>(list: WithAll<T>[], item: T) {
  return list.find((v) => dequal(v, item)) !== undefined;
}

export function isNotSelected<T>(list: WithAll<T>[]) {
  return list.length === 1 && list[0] === 'all';
}
