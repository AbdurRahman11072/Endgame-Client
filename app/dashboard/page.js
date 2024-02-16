
import Sidebar from "@/components/dashboard/sidebar/sidebar";


import styles from "./dashboard.module.css"
import './globals.css'
import DashboardNavbar from "@/components/dashboard/navbar/navbar";
import DashNav from "@/components/dashboard/navbar/dashboardTopNavbar/dashNav";
import ProtectedRoute from "@/utils/ProtectedRoute";
import DashboardChildren from "@/components/dashboard/dashboardChildren/DashboardChildren";
export default function DashboardLayout({ children }) {
    return (
        <ProtectedRoute>
        <html lang="en">
            <body>
           
                <div className={styles.body}>




                    <div className="lg:flex ">
                        <div className="sticky lg:fixed"  >
                            <Sidebar />
                        </div>

                        <div className="w-full  lg:ml-40">
                            <DashboardNavbar />
                            <DashNav />
                            <div className="w-full h-screen p-3 px-5 bg-slate-950">
                              
                                    <DashboardChildren> {children}</DashboardChildren>

                              
                            </div>

                        </div>
                    </div>

                </div>
              
            </body>
        </html>
        </ProtectedRoute>
    )
}
import Card from '@/components/dashboard/card/card';
import React from 'react';





const Dashboard = () => {
    return (
        <div className="h-screen">
            <div>

                <Card />
          
            </div>

         
     

  
     

    

        </div>
    );
};


