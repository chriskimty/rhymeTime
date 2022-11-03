const Forms = (props) => {

    return (
        <div>
            {
                props.validWord === true
                    ? null
                    :
                    <form onSubmit={props.handleWordInput}>
                        <h2>Enter a word you would like to rhyme:</h2>
                    <label htmlFor="userInput" className="visuallyHidden">Type a single word you would like to rhyme</label>
                    <input
                        type="userInput"
                        name="userInput"
                        value={props.userInput}
                        onChange={(event) => props.setUserInput(event.target.value)}
                        placeholder='Try "pickle"'
                        required />
                    <button className = "submit"
                        onClick={props.handleWordInput}
                        type="submit">submit</button>
                    
                    {/* Displays error message upon invalid input*/}
                    {props.error && <div>{props.error}</div>}
                </form>
            }
        </div>
    )
}

export default Forms; 