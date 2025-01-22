import React from "react";
import { SideBar } from "./_components/SideBar";
import { Header } from './_components/Header';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='bg-slate-100 h-screen'>
      <div className=" md:w-64 hidden md:block fixed">
        <SideBar />
      </div>
      <div className='md:ml-64'>
      <div>
        <Header/>

      </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
