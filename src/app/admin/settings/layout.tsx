"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Layers,
    Info,
} from "lucide-react";

const settingsTabs = [
    { name: "Collections", href: "/admin/settings/collections", icon: Layers },
    { name: "Info", href: "/admin/settings/info", icon: Info },

];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex flex-1 min-h-0 bg-[#1e1e20] text-white">
            <div className="w-64 border-r border-gray-700 p-4 space-y-2">
                {settingsTabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = pathname === tab.href;
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors
                ${active ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"}`}
                        >
                            <Icon size={18} />
                            <span>{tab.name}</span>
                        </Link>
                    );
                })}
            </div>

            <div className="flex-1 p-6">{children}</div>
        </div>
    );
}
