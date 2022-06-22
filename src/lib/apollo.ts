import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ow0f2017p901z40giw2jho/master',
  cache: new InMemoryCache()
})