import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
 uri: env("CLIENT_URI"),
 fetch: fetch,

 cache: new InMemoryCache(),
});

export default client;
