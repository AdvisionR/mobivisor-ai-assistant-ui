"use client";

import dynamic from 'next/dynamic';
import ChatSidebar from "@/features/chat/components/ChatSidebar";
import { useState } from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";

const PDFDrawer = dynamic(() => import('@/features/chat/components/PdfDrawer'), {
    ssr: false,
  });

export default function ChatLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-[#1e1e20] text-white overflow-hidden relative">
            {/* Top Control Bar */}
            <div className="absolute top-4 left-4 right-4 z-30 flex justify-between items-center pointer-events-none">
                <div className="flex gap-2">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="bg-[#2a2a2d] text-white px-3 py-2 rounded hover:bg-[#3a3a3d] shadow transition cursor-pointer pointer-events-auto"
                    >
                        {sidebarOpen ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeftOpen className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
                <ChatSidebar />
            )}

            {/* Main Content */}
            <main className="flex-1 flex justify-center overflow-y-auto pt-5 pb-6 px-4">
                <div className="w-full max-w-3xl flex flex-col h-full">
                    {children}
                </div>
            </main>

            <PDFDrawer />
        </div>
    )
}