import React, { useContext, useRef, useEffect } from 'react'
import GiphyContext from './GiphyContext'

const GiphyResults = ({styles}) => {
  const { keywords } = useContext(GiphyContext);

  return <div>
    <h1 className={styles.title}>
      {keywords || 'what?'}
    </h1>
  </div>
}

export default GiphyResults