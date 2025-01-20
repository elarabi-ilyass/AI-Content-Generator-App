import Image from "next/image";
import { Button } from '../components/ui/button';
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <SignOutButton>
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </SignOutButton>
  
    <p>
    <span className="text-3xl font-bold text-sky-800">Welcome to</span> <span 
    className="text-5xl font-bold text-sky-600">My Portfolio</span>
    <Button variant="destructive"> Salut </Button>
    </p>

    </div>
  );
}
