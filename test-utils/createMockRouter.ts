import * as Url from 'url';

interface QueryValue {
  [key: string]: string | string[] | undefined;
}

export function createTinyReplaceRouter(query?: QueryValue) {
  let queryValue: QueryValue = query || {};

  return {
    get query() {
      return queryValue;
    },
    replace: jest.fn((url: Url.UrlObject & { query: QueryValue }) => {
      if (typeof url.query === 'object' && url.query !== null) {
        queryValue = url.query;
      }
    }),
  };
}
