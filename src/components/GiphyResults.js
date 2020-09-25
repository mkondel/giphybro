import React, { useContext, useRef, useEffect } from 'react'
import GiphyContext from './GiphyContext'


const GiphyResults = ({styles}) => {
  const { results, nextPage } = useContext(GiphyContext);
  const parseResults = R => R.map(({title, bitly_url, images:{original:{mp4}, fixed_height_small:{url, width, height}}}) => 
    <div 
      key={mp4} 
      className={styles.loading} 
      style={{
        width: `${width}px`, 
        height: `${height}px`,
      }}
    >
      <a href={mp4}>
        <img src={url}/>
      </a>
    </div>
  )

  return <div className={styles.results}>
    {results && results.data && parseResults(results.data)}
    <button onClick={nextPage}>next</button>
  </div>
}

export default GiphyResults