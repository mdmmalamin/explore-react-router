import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {id, name, username, email, address} = friend;
    // console.log(address);
    return (
        <div className='friend'>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><small><strong>Username:</strong> <Link to={`/friend/${id}`}>{username}</Link></small></p>
            <address>
                {address.suite}, {address.street} 
                <br />
                {address.city}, {address.zipcode}
            </address>
        </div>
    );
};

export default Friend;