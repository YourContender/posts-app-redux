import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/actions";

function Title() {
    const dispatch = useDispatch();

    const text = useSelector(state => {
        const { inputReducer} = state;
        return inputReducer.text
    })

    const handleChange = (text) => {
        dispatch(inputText(text));
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type="text" onChange={(e) => handleChange(e.target.value)}/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title;