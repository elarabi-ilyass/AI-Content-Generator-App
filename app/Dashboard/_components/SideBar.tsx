'use client'
import React from "react";
import Image from "next/image";
import { Home, FileClock, WalletCards, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link'

export const SideBar = () => {
  const params = usePathname();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/Dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/Dashboard/History",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/Dashboard/Billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/Dashboard/Setting",
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm border">
      {/* Logo Section */}
      <div className="flex justify-center border-b pb-4">
        <Image src="/1737374516877wld411m2.jpg" alt="Logo" width={90} height={90} />
      </div>

      {/* Menu Section */}
      <div className="mt-5">
        {MenuList.map((menu, index) => (
          
          <div
            key={index}
            className={`flex items-center my-2 gap-4 py-3 hover:bg-gradient-to-r from-indigo-500 to-indigo-200 hover:text-white rounded-lg cursor-pointer 
              ${menu.path === params ? 'bg-gradient-to-r from-indigo-500 to-indigo-200' : ''}`}
          >
            <menu.icon className="w-5 h-5" />
            <h2 className="text-sm">{menu.name}</h2>
          </div>
          
        ))}
      </div>
    </div>
  );
};
