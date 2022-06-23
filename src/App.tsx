import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Routes } from "./Routes"

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </>
  )
}

export default App
