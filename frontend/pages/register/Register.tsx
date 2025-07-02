import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import DatePickers from "../components/DatePicker";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Register() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

  
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError("");
        // Proceed with registration logic
        console.log("Registered:", { email, firstName, lastName, password });
        window.location.href = "/login/Login"; // Redirect to login
    };

    return (
        <div
            className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[var(--font-geist-sans)]`}
        >
            <p className="text-xl font-bold mt-20 mb-6">Register</p>

            <form onSubmit={handleRegister} className="text-center">
                <div className="flex flex-col gap-4">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />

                    <label>Primeiro Nome</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />

                    <label>Apelido</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />
                    <DatePickers />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="text-black rounded-full border border-black/10 dark:border-white/20 transition-colors h-10 px-5 sm:min-w-44"
                        required
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="rounded-full border border-black/10 dark:border-white/20 transition-colors flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-5 sm:min-w-44"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
