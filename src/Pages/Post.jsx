import React from 'react';
import { useNavigate } from 'react-router';

const Post = ({post}) => {
    console.log(post);
    const {userId,id,title,body}=post;
    const navigate =useNavigate()

    const handleNavigate=()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className='border border-amber-300 rounded-2xl m-2 p-2 flex flex-col gap-2'>
            <div className='flex gap-5 bg'>
                <p className='bg-blue-950 p-2 rounded-2xl'>{userId}</p>
            <p  className='bg-blue-950 p-2 rounded-2xl'>{id}</p>
            </div>
            <p className='text-2xl font-bold'>{title}</p>
            <p className='text-neutral-400'>{body}</p>
            <button onClick={handleNavigate} className='btn bg-cyan-800 '>View details</button>
        </div>
    );
};

export default Post;