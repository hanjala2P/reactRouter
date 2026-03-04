import React, { use } from 'react';

const UsersDetails2 = ({userPromise}) => {
    const{name,username} =use(userPromise);
    return (
        <div>
            <h2 className='font-medium text-lg'>User Name :{username} </h2>
            <p className=' text-neutral-400'>Name : {name}</p>
        </div>
    );
};

export default UsersDetails2;