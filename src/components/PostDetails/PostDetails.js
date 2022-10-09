import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id, title, body, userId} = postDetails;

    const navigate = useNavigate();
    const handleAuthor = () => {
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h3>Details about Post: {id}</h3>
            <p><strong>Title: </strong>{title}</p>
            <p><strong>Body: </strong>{body}</p>
            <button onClick={handleAuthor}>Get the Author</button>
        </div>
    );
};

export default PostDetails;