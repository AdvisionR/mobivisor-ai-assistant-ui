"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
    { label: "Users", href: "/admin/users" },
    { label: "Settings", href: "/admin/settings" },
];

export default function AdminTabs() {
    const pathname = usePathname();

    return (
        <div className="px-4 mt-8 py-2">
            <nav className="flex gap-6">
                {TABS.map((tab) => {
                    const active = pathname.startsWith(tab.href);
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${active
                                ? "border-blue-500 text-blue-400"
                                : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500"
                                }`}
                        >
                            {tab.label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
