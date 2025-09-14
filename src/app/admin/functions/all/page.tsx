"use client";

import { useState } from "react";

export default function FunctionsPage() {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Pipe", "Filter", "Action"];

    return (
        <div className="flex flex-col p-6 text-white bg-[#1e1e20] min-h-[calc(100vh-80px)]">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">
                    Functions <span className="text-gray-400">0</span>
                </h1>
                <button className="border border-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-800">
                    Import Functions
                </button>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search Functions"
                    className="w-full max-w-sm px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div className="flex gap-2 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer px-3 py-1 rounded text-sm transition-colors ${activeTab === tab
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                    <h2 className="text-lg font-semibold mb-2">Made by Open WebUI Community</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        Discover, download, and explore custom functions
                    </p>
                    <button className="cursor-pointer bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                        Discover a function
                    </button>
                </div>
            </div>
        </div>
    );
}
