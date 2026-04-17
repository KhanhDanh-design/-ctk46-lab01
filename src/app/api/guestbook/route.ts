import { guestbookEntries } from "@/data/guestbook";

function jsonResponse(data: unknown, status = 200): Response {
  return Response.json(data, { status });
}

function validateNameAndMessage(name: string, message: string): string | null {
  if (name.length < 2 || name.length > 50) {
    return "Tên nhân vật phải từ 2-50 ký tự";
  }

  if (message.length < 1 || message.length > 500) {
    return "Lời nhắn phải từ 1-500 ký tự";
  }

  return null;
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get("limit");

  if (limitParam === null) {
    return jsonResponse(guestbookEntries);
  }

  const limit = Number.parseInt(limitParam, 10);
  if (!Number.isInteger(limit) || limit < 1) {
    return jsonResponse(
      {
        error: "Tham số limit không hợp lệ. Vui lòng nhập số nguyên dương.",
      },
      400,
    );
  }

  return jsonResponse(guestbookEntries.slice(0, limit));
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      {
        error: "Dữ liệu JSON không hợp lệ.",
      },
      400,
    );
  }

  const name =
    typeof (body as { name?: unknown }).name === "string"
      ? (body as { name: string }).name.trim()
      : "";
  const message =
    typeof (body as { message?: unknown }).message === "string"
      ? (body as { message: string }).message.trim()
      : "";

  const validationError = validateNameAndMessage(name, message);
  if (validationError) {
    return jsonResponse({ error: validationError }, 400);
  }

  const newEntry = {
    id: Date.now().toString(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);

  return jsonResponse(newEntry, 201);
}
