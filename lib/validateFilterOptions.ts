import { FILTER_OPTIONS_RAW } from '@/graphql';
import { NextRequest } from 'next/server';

import { FilterOptionsQuery } from '../components';
import { fetcher } from './fetcher';

export default async function validateFilterOptions(request: NextRequest) {
  const endpoint = process.env.SCHEMA_PATH as string;

  try {
    const graphqlResult = await fetcher<FilterOptionsQuery>(endpoint, {
      query: FILTER_OPTIONS_RAW,
    });

    if (!graphqlResult) {
      return null;
    }

    const validURLSearchParams = new URLSearchParams(request.nextUrl.search);
    const availableFilterEntries = Object.entries(graphqlResult.data.filterOptions);
    let hasChanged = false;

    availableFilterEntries.forEach(([key, filterValues]) => {
      const validValues: string[] = [];
      const mappedValues = filterValues.map((value) => {
        if (typeof value !== 'object') {
          return value;
        }
        return value.meta.name;
      });

      let hasInvalidValue = false;

      const queryStringValues = validURLSearchParams.getAll(key);

      queryStringValues.forEach((value) => {
        if (mappedValues.includes(value)) {
          validValues.push(value);
          return;
        }
        hasInvalidValue = true;
      });

      if (hasInvalidValue) {
        validURLSearchParams.delete(key);
        validValues.forEach((validValue) => {
          validURLSearchParams.append(key, validValue);
        });
        hasChanged = true;
      }
    });

    if (!hasChanged) {
      return null;
    }

    return validURLSearchParams.toString();
  } catch (e) {
    return null;
  }
}
