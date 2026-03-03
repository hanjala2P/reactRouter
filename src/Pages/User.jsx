import { Link } from "react-router";


const User = ({user}) => {
    const {name , email,id}=user;
    return (
        <div>
            <div className='flex flex-col  border-2 rounded-2xl border-accent shadow-lg p-4 m-2 gap-1'>
             <h3 className="font-medium text-2xl "> Name :{name}</h3>
             <p>Product code : {id}</p>
             <p className="text-gray-400"> Email :{email}</p>
             <Link to={`/users/${id}`} className="btn btn-accent mt-2">View Details</Link>
            </div>
        </div>
    );
};

export default User;