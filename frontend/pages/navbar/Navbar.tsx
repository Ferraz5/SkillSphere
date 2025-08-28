import {Geist, Geist_Mono} from "next/font/google";




const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Navbar() {

    return(
        <div
              className={`${geistSans.variable} ${geistMono.variable} p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}

        >

            <text>Discover</text>

            <text>About me</text>

        </div>

    );

}
