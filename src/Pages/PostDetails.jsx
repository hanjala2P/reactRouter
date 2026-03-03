import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {userId,id,title,body}=data;
    const navigate =useNavigate();
  
    return (
         <div className='border border-amber-300 rounded-2xl m-2 p-2 flex flex-col gap-2'>
            <div className='flex gap-5 bg'>
                <p className='bg-blue-950 p-2 rounded-2xl'>{userId}</p>
            <p  className='bg-blue-950 p-2 rounded-2xl'>{id}</p>
            </div>
            <p className='text-2xl font-bold'>{title}</p>
            <p className='text-neutral-400'>{body}</p>
            <button onClick={()=> navigate(-1)} className='btn'>Go Back</button>
           
        </div>
    );
};

export default PostDetails;