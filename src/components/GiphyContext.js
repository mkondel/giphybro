import React, { useState, createContext } from 'react'
import getConfig from 'next/config'

const { publicRuntimeConfig: { giphyToken } } = getConfig()
const TheContext = createContext({})

export const GiphyProvider = ({children}) => {

  const [keywords, setKeywords ] = useState('')
  const [results, setResults ] = useState([])

  return <TheContext.Provider value={{keywords, results, setKeywords, setResults}}>
    {children}
  </TheContext.Provider>
}

export default TheContext