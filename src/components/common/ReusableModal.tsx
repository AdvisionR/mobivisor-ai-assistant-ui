"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ReusableModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  onSave: () => void;
  saveLabel?: string;
  cancelLabel?: string;
}

export default function ReusableModal({
  open,
  title,
  children,
  onClose,
  onSave,
  saveLabel = "Save",
  cancelLabel = "Cancel",
}: ReusableModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#1e1e20] text-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="my-4">{children}</div>

        <DialogFooter className="flex gap-2">
          <Button
            className="bg-red-600 hover:opacity-80 text-white rounded-md px-4 py-2 border-none focus:outline-none cursor-pointer"
            onClick={onClose}
          >
            {cancelLabel}
          </Button>
          <Button
            className="bg-green-600 hover:opacity-80 text-white rounded-md px-4 py-2 border-none focus:outline-none cursor-pointer"
            onClick={onSave}
          >
            {saveLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
