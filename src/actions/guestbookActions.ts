"use server";

import { revalidatePath } from "next/cache";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";

export interface GuestbookActionState {
  error: string | null;
  success: boolean;
  message: string | null;
  timestamp: number;
}

function buildActionState(
  success: boolean,
  options?: {
    error?: string;
    message?: string;
  },
): GuestbookActionState {
  return {
    error: options?.error ?? null,
    success,
    message: options?.message ?? null,
    timestamp: Date.now(),
  };
}

export async function addGuestbookEntry(
  formData: FormData,
): Promise<GuestbookActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2 || name.length > 50) {
    return buildActionState(false, {
      error: "Tên nhân vật phải từ 2-50 ký tự.",
    });
  }

  if (message.length < 1 || message.length > 500) {
    return buildActionState(false, {
      error: "Lời nhắn phải từ 1-500 ký tự.",
    });
  }

  const newEntry: GuestbookEntry = {
    id: Date.now().toString(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);
  revalidatePath("/guestbook");

  return buildActionState(true, {
    message: "Đã ghi lời nhắn vào sổ lưu bút.",
  });
}

export async function deleteGuestbookEntry(id: string): Promise<void> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index !== -1) {
    guestbookEntries.splice(index, 1);
  }

  revalidatePath("/guestbook");
}
