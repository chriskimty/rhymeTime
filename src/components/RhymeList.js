import uuid from "react-uuid"

function RhymeList({noslice, allRhymes}){
    return(
    <>
        {allRhymes.slice(0,12)
        .map((rhymeBox) => {
        return (
            <li key={uuid()} className="rhymeList">{rhymeBox}
            </li>)
    })}
</>)
}

export default RhymeList;