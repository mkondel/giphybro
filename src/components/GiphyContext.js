import React, { useState, createContext, useEffect } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig: { giphyToken } } = getConfig()
const TheContext = createContext({})

export const GiphyProvider = ({children}) => {
  const [keywords, setKeywords ] = useState('')
  const [results, setResults ] = useState([])
  const [offset, setOffset ] = useState(0)
  const limit = 50
  const callGiphy = async api => {
    try{
      const res = await fetch(api, {mode: 'cors'})
      return await res.json()
    }catch(e){
      console.error(e)
    }
  }
  const apiGiphy = async api => {
    const {data} = await callGiphy(api)
    setResults(offset === 0 ? data : [...results, ...data])
  }

  const trendingGiphy = () => {apiGiphy(`https://api.giphy.com/v1/gifs/trending?limit=${limit}&api_key=${giphyToken}&offset=${offset}`)}
  const searchGiphy = () => {apiGiphy(`https://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${giphyToken}&offset=${offset}&q=${keywords}`)}
  const pageGiphy = () => {keywords === '' ? trendingGiphy() : searchGiphy()}
  const nextPage = () => setOffset(offset + limit)

  useEffect(trendingGiphy, []);
  useEffect(keywords === '' ? trendingGiphy : searchGiphy, [keywords]);
  useEffect(pageGiphy, [offset]);

  return <TheContext.Provider value={{keywords, results, setKeywords, setResults, nextPage, setOffset}}>
    {children}
  </TheContext.Provider>
}

export default TheContext