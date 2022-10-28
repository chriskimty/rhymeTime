//Import
import './App.css';
import { useState } from 'react';
import axios from 'axios';

//Import components
import Forms from './components/Forms'
import Footer from './components/Footer'

const App = () => {
  // set state for list of rhymes
  const [rhymes, setRhymes] = useState([]); 
  const [userInput, setUserInput] = useState('');
  
  const handleWordInput = (event) => {
    setUserInput(userInput);
    event.preventDefault();
    console.log("forms button has been clicked")
    
    const API_KEY = process.env.REACT_APP_WORDS_API_KEY;
    axios({
      url: `https://wordsapiv1.p.rapidapi.com/words/${userInput}/rhymes`,
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      },
    }).then((res) => {
      console.log(res)
      setRhymes(res.data.rhymes.all.slice(0, 15))
    })
  }

  return (
    <div className="App">
      <header>
          <div className="wrapper">
              <h1>Rhyme Time ⏰</h1>
              <h2>Enter a word you would like to rhyme!</h2>
          <Forms
            handleWordInput={handleWordInput}
            userInput={userInput}
            setUserInput={setUserInput}
            rhymes={rhymes}
          />
          </div>            
      </header> 
         
      <Footer />
    </div>
  );
}

export default App;
