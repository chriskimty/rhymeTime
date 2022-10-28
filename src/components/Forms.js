//Imports
import RhymeMe from "./RhymeMe";
const Forms = (props) => {
    
    return (
        <div>
            <form onSubmit={props.handleWordInput}>
                <label htmlFor="userInput">it's time to rhyme...</label>
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
        <RhymeMe userInput={props.userInput} rhymes={props.rhymes} />
        </div>
    )
}

export default Forms; 