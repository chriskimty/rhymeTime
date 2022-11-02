import { useState } from "react";
import axios from 'axios';

// Import Components
import Forms from './Forms';
import RhymeMe from "./RhymeMe";

const UserRhyme = () => {
    // set state to store list of rhymes/API data
    const [allRhymes, setAllRhymes] = useState([]);
    // set state for user input search word 
    const [userInput, setUserInput] = useState("");
    //set state for error handling
    const [error, setError] = useState(null);
    // set state for valid word 
    const [validWord, setValidWord] = useState(false);

    // function to handle word input
    const handleWordInput = (event) => {
        setUserInput(userInput);
        // prevents default behavior
        event.preventDefault();
        // removes error message upon search if error message was previously displayed due to an invalid word
        setError("");

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
            const rhymeResults = res.data.rhymes.all;
            if (rhymeResults === undefined) {
                throw Error('Please enter a valid word and try again!')
            }
            setAllRhymes(rhymeResults)
            setValidWord(true)
        }).catch((err => {
            setError(err.message)
        }))
    }

    //function to remove component on click
    const handleRemove = (event) => {
        setAllRhymes("");
        setUserInput("");
        setValidWord(false)
    };
    return (
        <>
            <Forms
                handleWordInput={handleWordInput}
                userInput={userInput}
                setUserInput={setUserInput}
                error={error}
                validWord={validWord} 
            />
            {
         allRhymes.length > 0
            ? <RhymeMe
                userInput={userInput}
                allRhymes={allRhymes}
                handleRemove={handleRemove}
            />
            : null
        }
        </>
    )
}

export default UserRhyme;