import React, { useContext, useRef, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import GiphyContext from './GiphyContext'


const GiphyResults = ({styles}) => {
  const { results, nextPage } = useContext(GiphyContext);
  const parseResults = R => R.map(({title, bitly_url, images:{original:{mp4}, fixed_height:{url, width, height}}}) => 
    <div 
      key={mp4} 
      className={styles.loading}
      style={{
        width: `${width}px`, 
        height: `${height}px`,
      }}
    >
      <a href={mp4} target='_blank' rel='noopener noreferrer'>
        <img src={url}/>
      </a>
    </div>
  )

  return <div>
    <InfiniteScroll
      className={styles.results}
      pageStart={0}
      loadMore={nextPage}
      hasMore={true}
      initialLoad={false}
    >
      {results && parseResults(results)}
    </InfiniteScroll>
  </div>
}

export default GiphyResults