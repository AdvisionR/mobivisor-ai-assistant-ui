'use client';

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#05294B] via-[#1b1f3a] to-[#F7941D] text-center space-y-10 transition-all duration-1000 ease-in-out">
      <div className="bg-white p-4 rounded shadow-md">
        <Image 
          src="/mobivisor-logo.png"
          alt="Mobivisor Logo"
          width={250}
          height={70}
          priority
        />
      </div>

      <h1 className="text-5xl font-extrabold text-white">
        Welcome to <span className="text-[#F7941D]">Mobivisor</span> AI Assistant
      </h1>

      <p className="text-lg text-gray-300 max-w-xl">
        Have questions about Mobivisor? Just ask your AI assistant.
      </p>

      <Link
        href="/chat"
        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-[#F7941D] rounded-full overflow-hidden transition duration-300 hover:text-[#05294B]"
      >
        <span className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
        <span className="relative flex items-center gap-2">
          Start Chatting
          <span className="transition-transform duration-300 transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </main>
  );
}
