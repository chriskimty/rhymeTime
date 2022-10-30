import uuid from "react-uuid";

const RhymeList = (props) => {
    return (
    <>
        {
            props.allRhymes.slice(0,15).map((rhymeBox) => {
                return (
                    <li key={uuid()}>{rhymeBox}</li>
            )
        })}
    </>)
}
export default RhymeList;