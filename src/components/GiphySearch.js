import React, { useContext, useRef, useEffect } from 'react'
import GiphyContext from './GiphyContext'
import FocusTrap from 'focus-trap-react'

const style = {
  left: '100vw',
  position: 'fixed',
}

const handleSpecialInput = ({value, keyCode}, keywords, setKeywords) => {
  console.log('handleInput()', value, keyCode, keywords)

  switch(keyCode){
    case 8:   // 8 is Backspace
      setKeywords(keywords.slice(0, keywords.length - 1))
      break;
    case 27:  // 27 is ESC
      setKeywords('')
      break;
    default:
      setKeywords(keywords)
      break;
  }
}

// no input box, just start typing
const GiphySearch = ({styles}) => {
  const { keywords, setKeywords } = useContext(GiphyContext);
  const updateKeywords = ({target:{value}}) => setKeywords(keywords+value)

  return <FocusTrap>
    <div>
      <input 
        style={style} 
        type='text' 
        autoFocus
        value=''
        onChange={updateKeywords}
        onKeyUp={ e => handleSpecialInput(e, keywords, setKeywords)}
      />
    </div>
  </FocusTrap>
}

export default GiphySearch