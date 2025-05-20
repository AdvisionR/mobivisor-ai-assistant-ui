'use client';

import { useEffect } from 'react';

type Props = {
    isOpen: boolean;
};

export default function PDFDrawer({ isOpen }: Props) {
    return (
        <aside
            className={`fixed top-0 right-0 h-full w-[70%] bg-white border-l border-gray-200 p-4 shadow-lg transition-transform duration-300 z-10 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="h-full overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">PDF Viewer</h2>
                <div className="bg-gray-100 h-[500px] flex items-center justify-center text-gray-500">
                    PDF Content Goes Here
                </div>
            </div>
        </aside>
    );
}
