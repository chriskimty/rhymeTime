//Import Components
import RhymeMe from "./RhymeMe";

const Forms = (props) => {
    return (
        <div>
            <form onSubmit={props.handleWordInput}>
                <label htmlFor="userInput" className="visuallyHidden">Type a single word you would like to rhyme</label>
                <input
                  type="userInput"
                  name="userInput"
                  value={props.userInput}
                  onChange={(event) => props.setUserInput(event.target.value)}
                  placeholder='Try "pickle"'
                  required />
                <button
                  onClick={props.handleWordInput}
                  type="submit">rhyme!</button>
        </form>
        {
          props.allRhymes.length > 0
            ? <RhymeMe userInput={props.userInput} allRhymes={props.allRhymes} handleRemove={props.handleRemove} />
            : null
        }
        
        </div>
    )
}

export default Forms; 