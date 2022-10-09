import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendData = useLoaderData();
    console.log(friendData);
    return (
        <div>
            <h2>Details About: {friendData.name}</h2>
            <p>Call him/her: {friendData.phone}</p>
            <p>Email: {friendData.email}</p>
            <p>Website: <Link to={friendData.website}><em>{friendData.website}</em></Link></p>
        </div>
    );
};

export default FriendDetails;