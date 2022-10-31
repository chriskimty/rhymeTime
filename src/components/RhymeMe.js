//Import 
import { useState } from 'react';
import RhymeList from './RhymeList';
import AllRhymeList from './AllRhymeList';
const RhymeMe = (props) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    }

    return (
        <section className="rhymeMe">

          <h3>"{props.userInput}" rhymes with:</h3>
            <ul className="wordsContainer">
                <RhymeList allRhymes={props.allRhymes}/>
                
                {isShown && <AllRhymeList allRhymes={props.allRhymes}/>}
            </ul>
            <button onClick={handleClick}>show me more rhymes!</button>

            <button onClick={props.handleRemove}>rhyme a new word!</button>


        </section> 
    )
}

export default RhymeMe;
