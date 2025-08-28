import {Geist, Geist_Mono} from "next/font/google";
import { useState } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Profile from "./profile";



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export default function ChProfile() {

      
    
      
      /*
<p className={"text-2xl sm:text-4xl " }><strong>Choose the Profile</strong></p>

            <div className="flex gap-4 items-center flex-col sm:flex-row ">

            <button  
            className= "rounded-full  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={goProfile1}

            >Profile 1</button>
           
           <button  
            className= "rounded-full  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          
            onClick={goProfile1}

            >Profile 2</button>
            <button  
            className= "rounded-full  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={goProfile1}

            >Profile 3</button>


            <button  
            className= "rounded-full  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={goProfile1}

            >Profile 4</button>
           
           
            </div>


      */

    return(
        
        <div  
         className={`${geistSans.variable} ${geistMono.variable}  items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
        >

                <Head>
                <title >Choose your profile</title>
                </Head>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


            <Profile />
            
            </main>


        </div>
        
    );
}
