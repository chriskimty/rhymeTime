//Import 
import { useState } from 'react';
import RhymeList from './RhymeList';
import AllRhymeList from './AllRhymeList';

const RhymeMe = (props) => {
    const [isShown, setIsShown] = useState(false);
  
    const handleClick = (event) => {
        setIsShown(current => !current);
    }

    return (
        <section className="rhymeMe">
            
          <h3>"{props.userInput}" rhymes with:</h3>
            <ul className="wordsContainer">
                <RhymeList allRhymes={props.allRhymes}/>
                
                <button onClick={handleClick}>more rhymes</button>
                {isShown && <AllRhymeList allRhymes={props.allRhymes} />}
            </ul>

            {/* unmounts RhymeMe component from display  */}
            <button onClick={props.handleRemove}>new word!</button>

        </section> 
    )
}

export default RhymeMe;

