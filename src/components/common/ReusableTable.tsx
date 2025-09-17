"use client";

import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import React from "react";
import ReusableDeleteDialog from "./ReusableDeleteModal";

export interface TableColumn<T extends object> {
  key: keyof T;         
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface ReusableTableProps<T extends object> {
  columns: TableColumn<T>[];
  data: T[];
  onEdit?: (row: T, index: number) => void;
  onDelete?: (row: T, index: number) => void;
  showActions?: boolean;
}

export default function ReusableTable<T extends object>({
  columns,
  data,
  onEdit,
  onDelete,
  showActions = false,
}: ReusableTableProps<T>) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-left text-sm border-b border-gray-700">
          {columns.map((col) => (
            <th key={String(col.key)} className="py-2">
              {col.label}
            </th>
          ))}
          {showActions && <th className="py-2 text-right">ACTIONS</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className="border-b border-gray-700 text-sm hover:bg-gray-800"
          >
            {columns.map((col) => (
              <td key={String(col.key)} className="py-2">
                {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
              </td>
            ))}
            {showActions && (
              <td className="py-2 text-right">
                <div className="flex gap-2 justify-end">
                  {onEdit && (
                    <Button
                      className="cursor-pointer" 
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(row, i)}
                    >
                      <Edit className="w-4 h-4 text-yellow-400" />
                    </Button>
                  )}
                  {onDelete && (
                    <ReusableDeleteDialog
                      trigger={
                        <Button className="cursor-pointer" variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      }
                      title="Delete Item"
                      message="Are you sure you want to delete this item? This action cannot be undone."
                      confirmLabel="Delete"
                      cancelLabel="Cancel"
                      onConfirm={() => onDelete(row, i)}
                    />
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
