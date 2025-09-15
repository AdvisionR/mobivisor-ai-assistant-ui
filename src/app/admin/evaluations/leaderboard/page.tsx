"use client";

import ReusableTable, { TableColumn } from "@/components/common/ReusableTable";

interface LeaderboardRow {
  model: string;
  rating: string;
  won: number;
  lost: number;
}

const leaderboardColumns: TableColumn<LeaderboardRow>[] = [
  { key: "model", label: "MODEL" },
  { key: "rating", label: "RATING" },
  { key: "won", label: "WON" },
  { key: "lost", label: "LOST" },
];

const leaderboardData: LeaderboardRow[] = [
  { model: "gpt-4.1", rating: "-", won: 12, lost: 5 },
  { model: "gpt-3.5-turbo", rating: "-", won: 8, lost: 9 },
  { model: "gpt-4o", rating: "-", won: 20, lost: 3 },
];

export default function LeaderboardPage() {
  return (
    <div className="bg-[#1e1e20] text-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Leaderboard</h2>
      <ReusableTable<LeaderboardRow> columns={leaderboardColumns} data={leaderboardData} />
    </div>
  );
}
