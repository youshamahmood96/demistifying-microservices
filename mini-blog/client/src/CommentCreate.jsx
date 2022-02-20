import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function CommentCreate({ postId }) {
    const [content, setComment] = useState('')
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        })
        setComment('')
    }
    return (
        <div>
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <label>New Comment</label>
                    <input
                        type="text"
                        className="form-control"
                        value={content}
                        onChange={e=>setComment(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate