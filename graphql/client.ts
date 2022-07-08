import { GraphQLClient } from 'graphql-request';

const url = process.env.NEXT_PUBLIC_SERVER as string;
const client = new GraphQLClient(url);

export default client;
