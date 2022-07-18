type GraphQLBody = {
  query: string;
};
export async function fetcher<T>(
  endpoint: string,
  body: GraphQLBody,
): Promise<{
  data: T;
} | null> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    const json: { data: T } = await res.json();
    return json;
  }

  return null;
}
