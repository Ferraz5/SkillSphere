import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthBox from "./components/AuthBox";
import Login from "./login/Login";


export default function Home() {

  /*
 <div
      className={`${geistSans.variable} ${geistMono.variable}  items-center justify-items-center  font-[family-name:var(--font-geist-sans)]`}
    >
      <div>
        <Head>
          <title >Welcome</title>
        </Head>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">




        
      </main>
    </div>

*/

  return (
    <div>
      <Login />
    </div>
  );
}
