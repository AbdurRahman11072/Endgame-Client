import React from 'react';
import Video from '../videos/page';
import TvWeb from '../tv&web/page';
import NavBar from '@/components/shared/NavBar';
import ProtectedRoute from '@/utils/ProtectedRoute';


import ProtectedRoute from '@/utils/ProtectedRoute';
import MainNavbar from '@/components/MainNavbar/MainNavbar';


export default function  HomePage(){
    return (
        <ProtectedRoute>
            
                <NavBar />
                <div className="mt-20">

                    <Video />
                    <TvWeb />

             <MainNavbar/>
                <div className="">

                    <Video />
               
                 

                </div>
            </div>
          
        </ProtectedRoute>
    );
};

