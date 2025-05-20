'use client'

import React from "react";

export const Sidebar = () => {
    return (
        <aside className="w-64 h-full bg-gray-100 dark:bg-gray-900 p-4 border-r">
            <h2 className="text-lg font-bold mb-4">Chat History</h2>
            <ul>
                <li className="mb-2 cursor-pointer hover:text-blue-500">+ New Chat</li>
                <li className="cursor-pointer hover:text-blue-500">* Search 1</li>
            </ul>
        </aside>
    )
}