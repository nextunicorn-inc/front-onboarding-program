export default function getQueryStringValues<T>(
  item: string | string[] | undefined,
  showNullWhenEmptyValue = true,
) {
  if (item === undefined || item.length === 0) {
    if (showNullWhenEmptyValue) {
      return null;
    }
    return [];
  }

  if (Array.isArray(item)) {
    return item.filter(Boolean) as unknown as T[];
  }

  return [item] as unknown as T[];
}
