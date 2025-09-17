"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1e1e20] px-4">
            <div className="w-full max-w-md bg-[#2a2a2d] text-white shadow-xl rounded-2xl p-8">
                <div className="mb-6 text-center">
                    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                        <Image
                            src="/favicon.png"
                            alt="Mobivisor Logo"
                            width={100}
                            height={40}
                            priority
                        />
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.4,
                                ease: [0.25, 1, 0.5, 1],
                            },
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            transition: {
                                duration: 0.3,
                                ease: [0.25, 1, 0.5, 1],
                            },
                        }}
                        className="w-full h-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}