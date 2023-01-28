import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "../../redux/actions";
import uniqId from 'uniqid';
import SingleComment from "../single-comment/SingleComment";

function Comments() {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();

    const comments = useSelector(state => {
        const { commentsReducer } = state;

        return commentsReducer.comments;
    })

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqId();
        
        dispatch(commentCreate(textComment, id))
    }
    console.log('COMMENTS: ', comments);

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input onChange={handleInput} type="text" />
                <input type="submit" />
            </form>
            {!!comments.length && comments.map(item => {
                return <SingleComment key={item.id} data={item}/>
            })}
        </div>
    )
}

export default Comments;