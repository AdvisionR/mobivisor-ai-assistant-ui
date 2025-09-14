"use client";

const dummyUsers = [
    { role: "ADMIN", name: "muhsin", email: "muhsin@gmail.com", lastActive: "a few seconds ago", createdAt: "Sep 14, 2025" },
    { role: "USER", name: "ahmet", email: "ahmet@example.com", lastActive: "1 hour ago", createdAt: "Sep 10, 2025" },
];

export default function OverviewPage() {
    return (
        <div className="bg-[#1e1e20] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Users</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-sm border-b border-gray-700">
                        <th className="py-2">ROLE</th>
                        <th className="py-2">NAME</th>
                        <th className="py-2">EMAIL</th>
                        <th className="py-2">LAST ACTIVE</th>
                        <th className="py-2">CREATED AT</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyUsers.map((user, i) => (
                        <tr key={i} className="border-b border-gray-700 text-sm hover:bg-gray-800 ml-4">
                            <td className="py-2">{user.role}</td>
                            <td className="py-2 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold uppercase">
                                    {user.name.charAt(0)}
                                </div>
                                {user.name}
                            </td>
                            <td className="py-2">{user.email}</td>
                            <td className="py-2">{user.lastActive}</td>
                            <td className="py-2">{user.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
