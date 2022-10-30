import uuid from "react-uuid";

const AllRhymeList = (props) => {
    <>
    {
        props.allRhymes.map((rhymeBox) => {
            return (
                <li key={uuid()}>{rhymeBox}</li>
        )
        })}
    </>
}

export default AllRhymeList;