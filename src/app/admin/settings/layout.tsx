"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Settings,
    Link as LinkIcon,
    Boxes,
    BarChart3,
    Wrench,
    FileText,
    Search,
    Code,
    Monitor,
    Volume2,
    Image,
    Workflow,
    Database,
    Layers,
} from "lucide-react";

const settingsTabs = [
    { name: "General", href: "/admin/settings/general", icon: Settings },
    { name: "Connections", href: "/admin/settings/connections", icon: LinkIcon },
    { name: "Models", href: "/admin/settings/models", icon: Boxes },
    { name: "Evaluations", href: "/admin/settings/evaluations", icon: BarChart3 },
    { name: "External Tools", href: "/admin/settings/external-tools", icon: Wrench },
    { name: "Documents", href: "/admin/settings/documents", icon: FileText },
    { name: "Collections", href: "/admin/settings/collections", icon: Layers },
    { name: "Web Search", href: "/admin/settings/web-search", icon: Search },
    { name: "Code Execution", href: "/admin/settings/code-execution", icon: Code },
    { name: "Interface", href: "/admin/settings/interface", icon: Monitor },
    { name: "Audio", href: "/admin/settings/audio", icon: Volume2 },
    { name: "Images", href: "/admin/settings/images", icon: Image },
    { name: "Pipelines", href: "/admin/settings/pipelines", icon: Workflow },
    { name: "Database", href: "/admin/settings/database", icon: Database },
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
