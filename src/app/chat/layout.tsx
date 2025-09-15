"use client";

import MainLayout from "../layouts/MainLayout";


export default function ChatLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
}
