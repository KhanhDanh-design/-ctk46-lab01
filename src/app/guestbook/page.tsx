"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
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

export default function GuestbookPage() {
  const {
    data: entries,
    error,
    isLoading,
    mutate,
  } = useSWR<GuestbookEntry[]>(GUESTBOOK_API, fetcher);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    if (!entries || entries.length === 0) {
      return 1;
    }

    return Math.ceil(entries.length / ITEMS_PER_PAGE);
  }, [entries]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedEntries = useMemo(() => {
    if (!entries) {
      return [];
    }

    const start = (page - 1) * ITEMS_PER_PAGE;
    return entries.slice(start, start + ITEMS_PER_PAGE);
  }, [entries, page]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2 || trimmedName.length > 50) {
      setFormError("Tên nhân vật phải từ 2-50 ký tự.");
      return;
    }

    if (trimmedMessage.length < 1 || trimmedMessage.length > 500) {
      setFormError("Lời nhắn phải từ 1-500 ký tự.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(GUESTBOOK_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          message: trimmedMessage,
        }),
      });

      const responseData = (await response.json()) as { error?: string };

      if (!response.ok) {
        setFormError(responseData.error ?? "Không thể thêm lời nhắn.");
        return;
      }

      setName("");
      setMessage("");
      setPage(1);

      await mutate();
    } catch {
      setFormError("Mất kết nối server. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    setFormError(null);
    setDeletingId(id);

    try {
      const response = await fetch(`${GUESTBOOK_API}/${id}`, {
        method: "DELETE",
      });

      const responseData = (await response.json()) as { error?: string };

      if (!response.ok) {
        setFormError(responseData.error ?? "Không thể xóa lời nhắn.");
        return;
      }

      await mutate();
    } catch {
      setFormError("Xóa thất bại do lỗi kết nối.");
    } finally {
      setDeletingId(null);
    }
  }

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

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="guest-name"
              className="mb-1 block text-sm font-black text-gray-700 dark:text-gray-200"
            >
              Tên người chơi
            </label>
            <input
              id="guest-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={submitting}
              placeholder="Ví dụ: Steve"
              className="w-full rounded-none border-2 border-emerald-700 bg-white px-3 py-2 font-semibold text-gray-900 outline-none transition focus:border-emerald-500 dark:border-emerald-500 dark:bg-gray-950 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="guest-message"
              className="mb-1 block text-sm font-black text-gray-700 dark:text-gray-200"
            >
              Lời nhắn
            </label>
            <textarea
              id="guest-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={submitting}
              rows={4}
              placeholder="Để lại lời nhắn cho thế giới Minecraft..."
              className="w-full rounded-none border-2 border-emerald-700 bg-white px-3 py-2 font-semibold text-gray-900 outline-none transition focus:border-emerald-500 dark:border-emerald-500 dark:bg-gray-950 dark:text-white"
            />
          </div>

          {formError && (
            <p className="rounded-none border-2 border-red-700 bg-red-100 px-3 py-2 text-sm font-bold text-red-900 dark:border-red-500 dark:bg-red-900/30 dark:text-red-200">
              {formError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-none border-2 border-emerald-900 bg-emerald-200 px-4 py-2 text-sm font-black uppercase tracking-wide text-emerald-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 dark:border-emerald-300 dark:bg-emerald-700 dark:text-emerald-50 dark:hover:bg-emerald-600"
          >
            {submitting ? "Đang đặt bảng..." : "Thêm lời nhắn"}
          </button>
        </form>
      </section>

      <section className="mc-animate-in space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black text-emerald-800 dark:text-emerald-300">
            Bảng lưu bút
          </h2>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
            Trang {page}/{totalPages}
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
            {paginatedEntries.map((entry) => {
              const isDeleting = deletingId === entry.id;

              return (
                <article
                  key={entry.id}
                  className="rounded-none border-4 border-amber-800 bg-amber-100 p-4 shadow-[4px_4px_0_0_#78350f] transition hover:-translate-y-0.5 dark:border-amber-500 dark:bg-amber-950/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-black text-amber-950 dark:text-amber-100">
                        {entry.name}
                      </h3>
                      <p className="mt-1 text-xs font-bold text-amber-800 dark:text-amber-300">
                        {new Date(entry.createdAt).toLocaleString("vi-VN")}
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={isDeleting}
                      onClick={() => handleDelete(entry.id)}
                      className="rounded-none border-2 border-red-900 bg-red-200 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-red-950 transition hover:bg-red-300 disabled:cursor-not-allowed disabled:opacity-60 dark:border-red-300 dark:bg-red-800/60 dark:text-red-100 dark:hover:bg-red-700/80"
                    >
                      {isDeleting ? "Đang phá block..." : "Xóa"}
                    </button>
                  </div>

                  <p className="mt-3 whitespace-pre-wrap text-sm font-semibold text-amber-950 dark:text-amber-100">
                    {entry.message}
                  </p>
                </article>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="rounded-none border-2 border-gray-700 bg-gray-200 px-4 py-2 text-sm font-black uppercase tracking-wide text-gray-900 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Trang trước
          </button>

          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={page >= totalPages}
            className="rounded-none border-2 border-gray-700 bg-gray-200 px-4 py-2 text-sm font-black uppercase tracking-wide text-gray-900 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Trang sau
          </button>
        </div>
      </section>
    </div>
  );
}
