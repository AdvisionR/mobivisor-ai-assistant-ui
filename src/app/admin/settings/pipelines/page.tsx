"use client";

export default function PipelinesPage() {
    return (
        <div className="bg-[#1e1e20] text-white p-6 rounded-lg space-y-8">
            <h2 className="text-lg font-semibold mb-4">Manage Pipelines</h2>
            <p className="text-sm text-gray-400">Pipelines Not Detected</p>

            <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm cursor-pointer transition-colors">
                    Refresh
                </button>
            </div>
        </div>
    );
}
