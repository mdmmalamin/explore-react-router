import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
            <a href={`/post/${id}`} className='anchor'>Show Details <span>{id}</span></a>
            <br />
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <br />
            <button onClick={handleDetails}>Show Details Again</button>
        </div>
    );
};

export default Post;