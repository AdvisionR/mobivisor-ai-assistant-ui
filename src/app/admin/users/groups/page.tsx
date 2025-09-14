"use client";

export default function GroupsPage() {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-120px)]">
            <div className="bg-[#1e1e20] text-white p-6 rounded-lg flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-2">Organize your users</h2>
                <p className="text-sm text-gray-400 mb-4">
                    Use groups to group your users and assign permissions.
                </p>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                    Create Group
                </button>
                <div className="mt-6 text-sm text-gray-400">
                    <p>Default permissions applies to all users with the "user" role</p>
                </div>
            </div>
        </div>
    );
}
