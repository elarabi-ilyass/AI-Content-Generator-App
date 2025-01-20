import { SignIn, useUser } from '@clerk/nextjs'

export default function Home() {

    return(
      <div className='flex items-center justify-center my-12'>
      <SignIn />
      </div>
    ) 
  
}