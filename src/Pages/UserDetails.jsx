import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,username,website,email,phone}=user;
    const navigate = useNavigate()
    return (
        <div className='flex  flex-col border m-4 p-4 card'>
            <h3 className='mb-4 font-mono bg-neutral-800 p-2'>User details are here</h3>
            <p className='text-2xl font-bold text-cyan-500'> Name :{name}</p>
            <p className='font-medium'> User Name : {username}</p>
  
            <div className='flex gap-4 items-center mt-4'>
                <p className='font-medium'>Phone : {phone}</p>
                <p className=''>Email : {email}</p>
            </div>

              <p className='mt-3'><a href={website}>{website}</a></p>
            
            <button className='btn mt-2 btn-accent' onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;