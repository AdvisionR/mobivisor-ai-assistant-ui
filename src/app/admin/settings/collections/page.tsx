"use client";

import { useState } from "react";
import ReusableTable, { TableColumn } from "@/components/common/ReusableTable";
import ReusableModal from "@/components/common/ReusableModal";
import { Input } from "@/components/ui/input";

interface Collection {
  name: string;
  items: number;
  createdAt: string;
}

const initialCollections: Collection[] = [
  { name: "Collection 1", items: 12, createdAt: "Sep 14, 2025" },
  { name: "Collection 2", items: 8, createdAt: "Sep 10, 2025" },
];

const columns: TableColumn<Collection>[] = [
  { key: "name", label: "NAME" },
  { key: "items", label: "ITEMS" },
  { key: "createdAt", label: "CREATED AT" },
];

export default function CollectionsPage() {
  const [data, setData] = useState(initialCollections);
  const [openModal, setOpenModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [collectionName, setCollectionName] = useState("");

  const handleEdit = (row: Collection, index: number) => {
    setEditingIndex(index);
    setCollectionName(row.name);
    setOpenModal(true);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex].name = collectionName;
      setData(updated);
    }
    setOpenModal(false);
  };

  return (
    <div className="bg-[#1e1e20] text-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Collections</h2>
      <ReusableTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={(row) =>
          setData(data.filter((c) => c !== row))
        }
        showActions
      />

      <ReusableModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
        title={editingIndex !== null ? "Edit Collection" : "Add Collection"}
      >
        <Input
          className="bg-gray-700 text-white border-gray-600"
          placeholder="Collection Name"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </ReusableModal>
    </div>
  );
}
