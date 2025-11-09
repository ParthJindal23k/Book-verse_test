import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import  {ApolloProvider}  from "@apollo/client/react"

console.log("Backend URI:", import.meta.env.VITE_BACKEND_URI); // 👈 Debug line

const client = new ApolloClient({
  link:new HttpLink({uri:import.meta.env.VITE_BACKEND_URI}),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
