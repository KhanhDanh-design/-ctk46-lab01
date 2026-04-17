import { guestbookEntries } from "@/data/guestbook";

type RouteContext = {
  params: Promise<{ id: string }>;
};

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

export async function DELETE(
  _request: Request,
  context: RouteContext,
): Promise<Response> {
  const { id } = await context.params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return jsonResponse({ error: "Không tìm thấy lời nhắn cần xóa." }, 404);
  }

  const deletedEntry = guestbookEntries.splice(index, 1)[0];
  return jsonResponse(
    {
      message: "Xóa lời nhắn thành công.",
      data: deletedEntry,
    },
    200,
  );
}

export async function PUT(
  request: Request,
  context: RouteContext,
): Promise<Response> {
  const { id } = await context.params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return jsonResponse({ error: "Không tìm thấy lời nhắn cần cập nhật." }, 404);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Dữ liệu JSON không hợp lệ." }, 400);
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

  guestbookEntries[index] = {
    ...guestbookEntries[index],
    name,
    message,
  };

  return jsonResponse(
    {
      message: "Cập nhật lời nhắn thành công.",
      data: guestbookEntries[index],
    },
    200,
  );
}
