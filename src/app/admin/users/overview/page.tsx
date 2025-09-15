"use client";

import ReusableTable, { TableColumn } from "@/components/common/ReusableTable";

interface User {
  role: string;
  name: string;
  email: string;
  lastActive: string;
  createdAt: string;
}

const userColumns: TableColumn<User>[] = [
  { key: "role", label: "ROLE" },
  { key: "name", label: "NAME" },
  { key: "email", label: "EMAIL" },
  { key: "lastActive", label: "LAST ACTIVE" },
  { key: "createdAt", label: "CREATED AT" },
];

const users: User[] = [
  { role: "ADMIN", name: "muhsin", email: "muhsin@gmail.com", lastActive: "a few seconds ago", createdAt: "Sep 14, 2025" },
  { role: "USER", name: "ahmet", email: "ahmet@example.com", lastActive: "1 hour ago", createdAt: "Sep 10, 2025" },
];


export default function OverviewPage() {
    return (
        <div className="bg-[#1e1e20] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Users</h2>
           <ReusableTable columns={userColumns} data={users} />
        </div>
    );
}
