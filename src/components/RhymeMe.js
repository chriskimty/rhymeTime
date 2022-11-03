//Import 
import { useState } from 'react';
import RhymeList from './RhymeList';
import AllRhymeList from './AllRhymeList';
const RhymeMe = (props) => {
    const [isShown, setIsShown] = useState(false);

    const handleMoreRhymes = (event) => {
      setIsShown(current => !current);
    }

    return (
        <section className="rhymeMe">
          <h2>"{props.userInput}" rhymes with:</h2>
            <ul className="wordsContainer">
                <RhymeList allRhymes={props.allRhymes}/>
                
                {isShown && <AllRhymeList allRhymes={props.allRhymes}/>}
            </ul>
        <button onClick={(handleMoreRhymes)} className="rhymeMeButton">
          {
            isShown
              ? "less rhymes"
              : "more rhymes"
          }
        </button>
            <button onClick={props.handleRemove} className="rhymeMeButton">new word</button>
        </section> 
    )
}

export default RhymeMe;