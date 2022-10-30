//Import 
// import { useState } from 'react';
import uuid from 'react-uuid';

const RhymeMe = (props) => {
    // const [moreRhymes, setMoreRhymes] = useState(props.rhymes);
    // const showMoreRhymes = () => {
    //     setMoreRhymes(moreRhymes)
    //     return(props.rhymes)
    // }

    return (
        <section className="rhymeMe">
            
          <h3>"{props.userInput}" rhymes with:</h3>
            <ul className="wordsContainer">
                {props.rhymes.slice(0,15).map((rhymeBox) => {
                    return (
                        <li key={uuid()}>{rhymeBox}
                        </li>)
                })}
                

                <button onClick=
                    {props.allRhymes.map((rhymeBox) => {
                    return (
                        <li key={uuid()}>{rhymeBox}
                        </li>)
                })}
                >more rhymes</button>
            </ul>
            {/* unmounts RhymeMe component from display  */}
            <button onClick={props.handleRemove}>new word!</button>

            {/* displays all Rhymes
            <button onClick={showMoreRhymes}>
                {
                    props.rhymes.length > 0 
                        ?  <ul className="wordsContainer"><li key={uuid()}>{moreRhymes}</li></ul>
                        : null
                }
                see all rhymes!
            </button> */}
        </section> 
    )
}

export default RhymeMe;

