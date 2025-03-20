import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import { useRouter } from 'next/router';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {

  const router = useRouter();
  

  

  const goLogin = () => {
    router.push("/login/Login");
  };
  
  const goRegister = () => {
    router.push("/register/Register");
  };

  
  return (

    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div>
        <Head>
          <title >Welcome</title>
        </Head>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

     
    
        <p className={"text-2xl sm:text-4xl " }><strong>Welcome</strong></p>
        
       

        <div className="flex gap-4 items-center flex-col sm:flex-row ">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={goRegister}
            rel="noopener noreferrer"
          >

            Register
          </a>
          <a
          onClick={goLogin}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"

            rel="noopener noreferrer"
          >

            Login
          
          </a>
        </div>
      </main>
    </div>
  );
}
