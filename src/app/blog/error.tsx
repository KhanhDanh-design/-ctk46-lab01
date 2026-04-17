"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="rounded-none border-4 border-red-900 bg-red-50 p-6 shadow-[6px_6px_0_0_#450a0a]">
      <h2 className="text-2xl font-black uppercase tracking-wide text-red-900">
        Lỗi khu vực blog!
      </h2>
      <p className="mt-3 text-sm leading-6 text-red-800">
        {error.message ||
          "Không thể tải dữ liệu blog từ API. Vui lòng thử lại."}
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-5 inline-flex items-center rounded-none border-4 border-amber-900 bg-linear-to-b from-amber-700 to-amber-900 px-4 py-2 text-sm font-black uppercase tracking-wider text-amber-100 transition hover:brightness-110"
      >
        Thử tải lại
      </button>
    </section>
  );
}
