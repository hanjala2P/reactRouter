import React from 'react';
import 'daisyui'
import Navbar from '../Structure/Navbar';
import Main from '../Structure/Hero';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Structure/Footer';
import { NavLink } from 'react-router';
import './Root.css'

const RootLayout = () => {
   const navigation = useNavigation();
   const isNavigatating = Boolean(navigation.location);
    return (
        <div className='mx-12'>
            <Navbar></Navbar>
            {isNavigatating && <p className='font-bold text-4xl'>Loding</p>}
            <Outlet></Outlet>
            <div>
              <aside className='flex flex-col gap-5 m-4'>
                    <h2 className='text-center text-2xl'></h2>
                    <p> <NavLink to="/home">home</NavLink> </p>
                    <p> <NavLink to="/about">about</NavLink> </p>
                    <p> <NavLink to="/contact">contact</NavLink> </p>
                    <p> <NavLink to="/users">users</NavLink> </p>
                </aside>
             
            </div>
            
            <Footer></Footer>
           
           
            

        </div>
    );
};

export default RootLayout;