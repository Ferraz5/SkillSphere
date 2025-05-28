import {Geist, Geist_Mono} from "next/font/google";
import { useState } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from "./Navbar";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export default function PrfSelected() {


    const router = useRouter();
      
    
      /*

       <p className={"text-2xl sm:text-4xl " }><strong>hello</strong></p>

            <div className="flex gap-4 items-center flex-col sm:flex-row ">

            
           
            </div>
      */
    return(
      <div>
        
      <Navbar/>

        <div  
         className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
         >

                <Head>
                <title >Profile</title>
                </Head>
                
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


            
            </main>


        </div>
          </div>
        
    );
}
