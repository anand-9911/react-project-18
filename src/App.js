import './App.css';
import {useState} from 'react';

function App() {
  const [articleSearchTerm, handleSearchArticle] = useState('');
  const [keyValueEvents, handleKeyEvents] = useState({
    keyDownCount: 0,
    keyValue: '',
  });
  const {keyDownCount, keyValue} = keyValueEvents;

  const searchArticle = (event) => {
    handleSearchArticle(event.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 38) {
      handleKeyEvents({keyDownCount: keyDownCount - 1, keyValue: e.keyCode});
    } else if (e.keyCode === 40) {
      handleKeyEvents({keyDownCount: keyDownCount + 1, keyValue: e.keyCode});
    } else {
      handleKeyEvents({
        keyDownCount: keyValueEvents.keyDownCount,
        keyValue: e.keyCode,
      });
    }
  };
  console.log('articleSearchTerm=>', articleSearchTerm);
  // console.log('keyValueEvents=>', keyValueEvents);

  return (
    <div className="App" style={{margin: '50px'}}>
      <input
        placeholder="Enter Search here"
        aria-valuetext={articleSearchTerm}
        value={articleSearchTerm}
        type="text"
        onChange={searchArticle}
        onKeyDown={onKeyDown}
      />
      <button aria-hidden>Search</button>
    </div>
  );
}

export default App;
