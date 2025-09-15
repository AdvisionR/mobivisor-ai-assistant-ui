"use client";

import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminTabs from "./AdminTabs";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();

    useEffect(() => {
        // This part must be changed when a user with the admin role is added.
        if (!user || user.role !== "USER") {
            router.push("/");
        }
    }, [user, router]);

    return (
        <div className="flex flex-col min-h-screen bg-[#1e1e20] text-white">
            {/* Üst bar */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <AdminTabs />

                {/* Chat'e Dön Butonu */}
                <button
                    onClick={() => router.push("/chat")}
                    className="flex items-center gap-2 px-3 py-1.5 border-3 border-gray-700 hover:bg-gray-700 rounded text-white text-sm transition-colors cursor-pointer"
                >
                    <Image
                        src="/favicon.png"
                        alt="Mobivisor Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                        priority
                    />
                    <span>Return to Chat</span>
                </button>
            </div>

            {/* İçerik */}
            <div className="p-4 flex-1">{children}</div>
        </div>
    );
}
