
import { useLoaderData } from 'react-router';
import User from './user';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <div className='flex justify-between'>
                <h2>Users</h2>
                <h2>Total User : {users.length}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
             users.map(user=><User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;