import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    
   const {id}=posts;
    return (
        <div>
            <h2 className='font-bold text-2xl'>total post : {posts.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                posts.map(post=><Post key={id} post={post}></Post>)
            }
            </div>
          
        </div>
    );
};

export default Posts;