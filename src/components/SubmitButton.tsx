"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="default"
      disabled={pending}
      className="h-10 rounded-none border-2 border-emerald-900 bg-emerald-200 px-4 py-2 text-sm font-black uppercase tracking-wide text-emerald-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 dark:border-emerald-300 dark:bg-emerald-700 dark:text-emerald-50 dark:hover:bg-emerald-600"
    >
      {pending ? "Đang chế tạo..." : "Gửi lời nhắn"}
    </Button>
  );
}
