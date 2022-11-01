import './App.css';
import clock from './assets/logo.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';

//Import components
import Forms from './components/Forms'
import Footer from './components/Footer'

const App = () => {
  // set state to store list of rhymes/API data
  const [allRhymes, setAllRhymes] = useState([]);

  // set state for user input search word 
  const [userInput, setUserInput] = useState('');

  //set state for error handling
  const [error, setError] = useState(null);
  
  // function to handle word input
  const handleWordInput = (event) => {
    setUserInput(userInput);
    event.preventDefault();
    // disables rhyme button after initial use... but I don't want this because of the possible error. However, if I make call in UserRhymeSection and then RhymeMe is no longer child of Forms, this might fix issue.
    // event.currentTarget.disabled = true;
  
    const API_KEY = process.env.REACT_APP_WORDS_API_KEY;
    //API is called when function is run (i.e. form is submitted)
    axios({
      url: `https://wordsapiv1.p.rapidapi.com/words/${userInput}/rhymes?rapidapi-key=${API_KEY}`,
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      },
    })
      .then((res) => {
        if (res.data.rhymes.all === undefined) {
          throw Error ('Please enter a valid word and try again!')
        }
        setAllRhymes(res.data.rhymes.all)
    }).catch((err => {
        setError(err.message)
    }))
  }

  //function to remove component on click
  const handleRemove = (event) => {
    setAllRhymes("");
    setUserInput("");
    // reload on initial page to clear saved state
    window.location.reload(false);
  };

  //Loading Screen
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1100)
    }, [])

  return (
    <div className="App">
      {
        loading
          ? <div className="logoContainer">
              <img src={clock} className="logo" alt="logo" />
          </div>
          : <>
              <header>
                <div className="wrapper landing">
                <h1>
                  <img src={clock} className="small" alt="small clock"/>rhymeTime
                  </h1>
                  <h2>Enter a word you would like to rhyme:</h2>
                  <Forms
                    handleWordInput={handleWordInput}
                    userInput={userInput}
                    setUserInput={setUserInput}
                    allRhymes={allRhymes}
                    handleRemove={handleRemove}
                    error={error}
                    setError={setError}
                  />
                  </div>            
              </header> 
              <Footer />
            </>
      }

      
    </div>
  );
}

export default App;
