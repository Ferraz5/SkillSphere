import {Geist, Geist_Mono} from "next/font/google";
import { useState } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box } from "lucide-react";



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Login() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        
        const router = useRouter();
          
        
          
        
          const gochProfile = () => {
            router.push("/chProfile/ChProfile");
          };


    return (
    <div
        className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >

        <Head>
        <title >Login</title>
        </Head>
        <div  style={{marginTop: "150px"}}>
        <p><strong>Login</strong></p>
        </div>
        <div style={{textAlign: "center"}} >
            <label >EMAIL</label>
            <div style={{marginTop: "5px"}}/>
            <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />
            
            
            <div style={{marginTop: "20px"}}/>
            <label >PASSWORD</label>
            <div style={{marginTop: "5px"}}/>
           <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />

            <div style={{marginTop: "20px"}}>
                <a
                    className= "rounded-full  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    onClick={gochProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                >Login</a>
            </div>




        </div>
</div>
    );
}