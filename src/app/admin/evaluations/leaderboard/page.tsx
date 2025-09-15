"use client";

const dummyModels = [
    { model: "gpt-4.1", rating: "-", won: 12, lost: 5 },
    { model: "gpt-3.5-turbo", rating: "-", won: 8, lost: 9 },
    { model: "gpt-4o", rating: "-", won: 20, lost: 3 },
];

export default function LeaderboardPage() {
    return (
        <div className="bg-[#1e1e20] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold flex items-center my-2">
                Leaderboard{" "}
                <span className="text-gray-400 ml-2 font-normal">{dummyModels.length}</span>
            </h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-sm border-b border-gray-700">
                        <th className="py-2">RK</th>
                        <th className="py-2">MODEL</th>
                        <th className="py-2">RATING</th>
                        <th className="py-2">WON</th>
                        <th className="py-2">LOST</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyModels.map((row, i) => (
                        <tr key={i} className="border-b border-gray-700 text-sm hover:bg-gray-800">
                            <td className="py-2">{i + 1}</td>
                            <td className="py-2 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold uppercase">
                                    {row.model.charAt(0)}
                                </div>
                                {row.model}
                            </td>
                            <td className="py-2">{row.rating}</td>
                            <td className="py-2 text-green-400">{row.won}</td>
                            <td className="py-2 text-red-400">{row.lost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
