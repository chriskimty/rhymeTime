const RhymeMe = (props) => {
    return (
        <section className="rhymeMe">
            
          <h3>"{props.userInput}" rhymes with:</h3>
            <ul className="wordsContainer">
                {props.rhymes.map((rhymeBox) => {
                    return (
                            <li>{rhymeBox}</li>
                        )
          })}
            </ul>
        </section>
    )
}

export default RhymeMe;

