import { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { RiseLoader } from "react-spinners";
import UsersDetails2 from "./UsersDetails2";


const User = ({user}) => {
    const {name , email,id}=user;
    const [showInfo,setShowInfo]=useState(false);
    const [visitHome, setVisitHome]=useState(false);
    const location = useLocation();
    console.log(location)

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());

   if(visitHome){
    return <Navigate to='/home'></Navigate>
   }
    return (
        <div>
            <div className='flex flex-col  border-2 rounded-2xl border-accent shadow-lg p-4 m-2 gap-1'>
             <h3 className="font-medium text-2xl "> Name :{name}</h3>
             <p>Product code : {id}</p>
             <p className="text-gray-400"> Email :{email}</p>
            <div className="flex items-center gap-4 mt-2">
                 <Link to={`/users/${id}`} className="btn btn-accent">View Details</Link>
             <button onClick={()=> setShowInfo(!showInfo)} className="btn btn-secondary">{showInfo ? 'Hide': 'Show' } Info</button>
             {
                showInfo && <Suspense fallback={<RiseLoader></RiseLoader>}>
                    <UsersDetails2 userPromise={userPromise}></UsersDetails2>
                </Suspense>
             }
            
            </div>
             <button onClick={()=>setVisitHome(true)} className="btn btn-soft mt-2 rounded-lg">Visit Home</button>
            </div>
        </div>
    );
};

export default User;