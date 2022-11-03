//Import 
import { useState } from 'react';
import RhymeList from './RhymeList';
import AllRhymeList from './AllRhymeList';
const RhymeMe = (props) => {
  // state that stores list of rhymes that is displayed
    const [isShown, setIsShown] = useState(false);

    const handleMoreRhymes = (event) => {
      setIsShown(current => !current);
    }

    return (
        <section className="rhymeMe">
          <h2>"{props.userInput}" rhymes with:</h2>
        <ul className="wordsContainer">
              {/* RhymeList (list of 12 words) is always displayed */}
                <RhymeList allRhymes={props.allRhymes}/>
              {/* AllRhymeList (list of the rest of rhymes) is conditionally displayed */}
                {isShown && <AllRhymeList allRhymes={props.allRhymes}/>}
        </ul>
        {/* button to handle display of AllRhymeList */}
        <button onClick={(handleMoreRhymes)} className="rhymeMeButton">
          {
            isShown
              ? "less rhymes"
              : "more rhymes"
          }
        </button>
        {/* button to "remove" component and "return" to forms */}
            <button onClick={props.handleRemove} className="rhymeMeButton">new word</button>
        </section> 
    )
}

export default RhymeMe;