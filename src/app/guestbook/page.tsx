"use client";

import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import useSWR from "swr";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  addGuestbookEntry as addGuestbookEntryAction,
  deleteGuestbookEntry,
  type GuestbookActionState,
} from "@/actions/guestbookActions";
import type { GuestbookEntry } from "@/data/guestbook";

const GUESTBOOK_API = "/api/guestbook";
const ITEMS_PER_PAGE = 5;

const fetcher = async (url: string): Promise<GuestbookEntry[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Không thể tải sổ lưu bút từ server.");
  }

  return response.json();
};

function DeleteActionButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="destructive"
      disabled={pending}
      className="h-8 rounded-none border-2 border-red-900 bg-red-200 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-red-950 transition hover:bg-red-300 disabled:cursor-not-allowed disabled:opacity-60 dark:border-red-300 dark:bg-red-800/60 dark:text-red-100 dark:hover:bg-red-700/80"
    >
      {pending ? "Đang xóa..." : "Xóa"}
    </Button>
  );
}

export default function GuestbookPage() {
  const {
    data: entries,
    error,
    isLoading,
    mutate,
  } = useSWR<GuestbookEntry[]>(GUESTBOOK_API, fetcher);

  const { toast } = useToast();
  const addFormRef = useRef<HTMLFormElement>(null);
  const lastToastTimestampRef = useRef<number>(0);
  const [page, setPage] = useState(1);

  const initialAddState: GuestbookActionState = {
    error: null,
    success: false,
    message: null,
    timestamp: 0,
  };

  const [addState, addGuestbookEntry] = useActionState(
    async (_prevState: GuestbookActionState, formData: FormData) => {
      const result = await addGuestbookEntryAction(formData);

      if (result.success) {
        addFormRef.current?.reset();
        setPage(1);
        void mutate();
      }

      return result;
    },
    initialAddState,
  );

  const totalPages = useMemo(() => {
    if (!entries || entries.length === 0) {
      return 1;
    }

    return Math.ceil(entries.length / ITEMS_PER_PAGE);
  }, [entries]);

  const currentPage = Math.min(page, totalPages);

  const paginatedEntries = useMemo(() => {
    if (!entries) {
      return [];
    }

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return entries.slice(start, start + ITEMS_PER_PAGE);
  }, [entries, currentPage]);

  useEffect(() => {
    if (
      !addState.timestamp ||
      addState.timestamp === lastToastTimestampRef.current
    ) {
      return;
    }

    lastToastTimestampRef.current = addState.timestamp;

    if (addState.success) {
      toast.success("Thành tựu: Đã lưu vào rương!", {
        description: addState.message ?? "Lời nhắn đã được ghi thành công.",
        className:
          "rounded-none border-2 border-emerald-700 bg-emerald-100 text-emerald-950 dark:border-emerald-400 dark:bg-emerald-900 dark:text-emerald-100",
      });
      return;
    }

    if (addState.error) {
      toast.error("Lỗi Redstone: Thông tin không hợp lệ!", {
        description: addState.error,
        className:
          "rounded-none border-2 border-red-700 bg-red-100 text-red-950 dark:border-red-400 dark:bg-red-900 dark:text-red-100",
      });
    }
  }, [addState, toast]);

  return (
    <div className="minecraft-page space-y-8">
      <section className="mc-animate-in rounded-none border-4 border-emerald-700 bg-linear-to-br from-emerald-500 via-emerald-400 to-lime-400 p-6 text-emerald-950 shadow-[8px_8px_0_0_#14532d] sm:p-8 dark:border-emerald-500 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-700 dark:text-emerald-50 dark:shadow-[8px_8px_0_0_#022c22]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-900/80 dark:text-emerald-100/90">
          Guestbook Realm
        </p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">
          Sổ lưu bút Minecraft
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-semibold sm:text-base">
          Viết lời nhắn như đang đặt một tấm bảng gỗ trong thế giới block của
          bạn. Chủ nhân máy chủ: Danh Nguyễn Tuấn Khanh - MSSV: 2212390.
        </p>
      </section>

      <section className="mc-animate-in rounded-none border-4 border-gray-700 bg-gray-100 p-5 shadow-[6px_6px_0_0_#1f2937] dark:border-gray-500 dark:bg-gray-900 sm:p-6">
        <h2 className="text-xl font-black text-emerald-800 dark:text-emerald-300">
          Đặt bảng gỗ mới
        </h2>

        <form
          ref={addFormRef}
          className="mt-4 space-y-4"
          action={addGuestbookEntry}
        >
          <div>
            <label
              htmlFor="guest-name"
              className="mb-1 block text-sm font-black text-gray-700 dark:text-gray-200"
            >
              Tên người chơi
            </label>
            <Input
              id="guest-name"
              name="name"
              minLength={2}
              maxLength={50}
              required
              placeholder="Ví dụ: Steve"
              className="h-11 rounded-none border-2 border-emerald-700 bg-white px-3 py-2 font-semibold text-gray-900 outline-none transition focus-visible:border-emerald-500 focus-visible:ring-0 dark:border-emerald-500 dark:bg-gray-950 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="guest-message"
              className="mb-1 block text-sm font-black text-gray-700 dark:text-gray-200"
            >
              Lời nhắn
            </label>
            <Textarea
              id="guest-message"
              name="message"
              rows={4}
              minLength={1}
              maxLength={500}
              required
              placeholder="Để lại lời nhắn cho thế giới Minecraft..."
              className="rounded-none border-2 border-emerald-700 bg-white px-3 py-2 font-semibold text-gray-900 outline-none transition focus-visible:border-emerald-500 focus-visible:ring-0 dark:border-emerald-500 dark:bg-gray-950 dark:text-white"
            />
          </div>

          {addState.error && (
            <p className="rounded-none border-2 border-red-700 bg-red-100 px-3 py-2 text-sm font-bold text-red-900 dark:border-red-500 dark:bg-red-900/30 dark:text-red-200">
              {addState.error}
            </p>
          )}

          {addState.success && addState.message && (
            <p className="rounded-none border-2 border-emerald-700 bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-900 dark:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-200">
              {addState.message}
            </p>
          )}

          <SubmitButton />
        </form>
      </section>

      <section className="mc-animate-in space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black text-emerald-800 dark:text-emerald-300">
            Bảng lưu bút
          </h2>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
            Trang {currentPage}/{totalPages}
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={`skeleton-${index}`}
                className="animate-pulse rounded-none border-4 border-amber-800 bg-amber-100 p-4 shadow-[4px_4px_0_0_#78350f] dark:border-amber-500 dark:bg-amber-950/40"
              >
                <div className="h-4 w-1/3 bg-amber-300 dark:bg-amber-700" />
                <div className="mt-3 h-3 w-full bg-amber-300 dark:bg-amber-700" />
                <div className="mt-2 h-3 w-4/5 bg-amber-300 dark:bg-amber-700" />
              </article>
            ))}
          </div>
        )}

        {!isLoading && error && (
          <div className="rounded-none border-4 border-red-700 bg-red-100 p-4 text-red-900 shadow-[4px_4px_0_0_#7f1d1d] dark:border-red-500 dark:bg-red-900/30 dark:text-red-200">
            <p className="font-black">Lỗi tải dữ liệu Guestbook!</p>
            <p className="mt-1 text-sm font-semibold">
              Không thể kết nối API. Hãy thử tải lại trang hoặc kiểm tra server.
            </p>
          </div>
        )}

        {!isLoading && !error && entries && entries.length === 0 && (
          <div className="rounded-none border-4 border-gray-600 bg-gray-200 p-5 text-center text-gray-700 shadow-[4px_4px_0_0_#374151] dark:border-gray-500 dark:bg-gray-800 dark:text-gray-200">
            <p className="font-black">Chưa có lời nhắn nào.</p>
            <p className="mt-1 text-sm font-semibold">
              Hãy là người chơi đầu tiên để lại dấu ấn.
            </p>
          </div>
        )}

        {!isLoading && !error && paginatedEntries.length > 0 && (
          <div className="grid gap-4">
            {paginatedEntries.map((entry) => (
              <Card
                key={entry.id}
                className="rounded-none border-4 border-stone-600 bg-stone-800 py-0 text-stone-100 shadow-[4px_4px_0_0_#1c1917] transition hover:-translate-y-0.5"
              >
                <CardHeader className="rounded-none px-4 pt-4 pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-base font-black text-stone-100">
                        {entry.name}
                      </CardTitle>
                      <p className="mt-1 text-xs font-bold text-stone-300">
                        {new Date(entry.createdAt).toLocaleString("vi-VN")}
                      </p>
                    </div>

                    <form action={deleteGuestbookEntry.bind(null, entry.id)}>
                      <DeleteActionButton />
                    </form>
                  </div>
                </CardHeader>

                <CardContent className="px-4 pt-0 pb-4">
                  <p className="mt-1 whitespace-pre-wrap text-sm font-semibold text-stone-100">
                    {entry.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setPage((current) =>
                Math.max(1, Math.min(totalPages, current) - 1),
              )
            }
            disabled={currentPage === 1}
            className="h-10 rounded-none border-2 border-gray-700 bg-gray-200 px-4 py-2 text-sm font-black uppercase tracking-wide text-gray-900 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Trang trước
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setPage((current) =>
                Math.min(totalPages, Math.min(totalPages, current) + 1),
              )
            }
            disabled={currentPage >= totalPages}
            className="h-10 rounded-none border-2 border-gray-700 bg-gray-200 px-4 py-2 text-sm font-black uppercase tracking-wide text-gray-900 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Trang sau
          </Button>
        </div>
      </section>
    </div>
  );
}
