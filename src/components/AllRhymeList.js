import uuid from "react-uuid"

function AllRhymeList(props){
    return(
    <>
        {props.allRhymes.slice(13,99).map((rhymeBox) => {
        return (
            <li key={uuid()} className="rhymeList">{rhymeBox}
            </li>)
        })}
    </>)
}

export default AllRhymeList;