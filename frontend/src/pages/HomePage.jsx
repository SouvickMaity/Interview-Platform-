import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import axiosInstance from "../lib/axios";


const HomePage = async () => {

  const result= await axiosInstance.get("/");

  return (
    <div>
        <button className='btn btn-secondary' onClick={()=>toast.error("error")}>Click me</button>
        <SignedOut>
            <SignInButton mode='modal'>
            <button>Login</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton/>
        </SignedIn>

        <UserButton/>
        
    </div>
  )
}

export default HomePage