//Import 
import uuid from 'react-uuid';

const RhymeMe = (props) => {
    return (
        <section className="rhymeMe">
            
          <h3>"{props.userInput}" rhymes with:</h3>
            <ul className="wordsContainer">
                {props.rhymes.map((rhymeBox) => {
                    return (
                        <li key={uuid()}>{rhymeBox}</li>
                        )
          })}
            </ul>
            {/* unmounts RhymeMe component from display  */}
            <button onClick={props.handleRemove}>new word!</button>
        </section>
    )
}

export default RhymeMe;

