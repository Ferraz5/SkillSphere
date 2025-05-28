import { motion } from "framer-motion";


export default function LOgin() {
  return (
    
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
  className="relative bg-[#1c1c1c] p-8 rounded-2xl shadow-xl w-80"
>
      <div className="relative bg-[#1c1c1c] p-8 rounded-2xl shadow-xl w-80">
        <div className="flex justify-center items-center mb-6 text-white gap-2">
          <span className="text-pink-500 text-xl">🔊</span>
          <h2 className="text-lg font-bold tracking-widest">LOGIN</h2>
          <span className="text-pink-500 text-xl">❤️</span>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 rounded-full bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded-full bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none"
        />

        <button className="w-full bg-cyan-400 text-black font-semibold py-2 rounded-full hover:bg-cyan-300 transition">
          Sign in
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-gray-300 hover:underline">Forgot Password</a>
          <a href="#" className="text-pink-500 hover:underline">Sign up</a>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-gray-700 pointer-events-none"></div>
      </div>
      </motion.div>
    </div>
  );
}
