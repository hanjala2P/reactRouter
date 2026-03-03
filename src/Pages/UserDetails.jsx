import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,username,website,email,phone}=user;
    return (
        <div>
            <h3>User details are here</h3>
            <p>{name}</p>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{website}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;