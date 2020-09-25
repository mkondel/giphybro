import React, { useContext, useRef, useEffect } from 'react'
import GiphyContext from './GiphyContext'
import FocusTrap from 'focus-trap-react'

const style = {
  left: '100vw',
  position: 'fixed',
}


// no input box, just start typing
const GiphySearch = ({styles}) => {
  const { keywords, setKeywords, setOffset } = useContext(GiphyContext);
  const updateKeywords = ({target:{value}}) => setKeywords(String(keywords+value).trim())
  const handleSpecialInput = ({value, keyCode}) => {
    console.log('handleInput()', value, keyCode, keywords)
    setOffset(0)
    window.scrollTo(0, 0)

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

  const onDeactivate = () => {
    alert('onDeactivate')
  }

  return <FocusTrap focusTrapOptions={{escapeDeactivates: false, allowOutsideClick: true, onDeactivate: () => console.log('onDeactivate'), onActivate: () => console.log('onActivate') }}>
    <div>
      {keywords ? <h1>{keywords}</h1> : <h1>what?</h1>}
      <input 
        style={style} 
        type='text' 
        autoFocus
        value=''
        onChange={updateKeywords}
        onKeyUp={handleSpecialInput}
      />
    </div>
  </FocusTrap>
}

export default GiphySearch