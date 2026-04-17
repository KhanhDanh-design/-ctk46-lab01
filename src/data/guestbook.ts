export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string | Date;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "1003",
    name: "Danh Nguyễn Tuấn Khanh - 2212390",
    message: "Hôm nay vừa hoàn thành công trình kho đồ Emerald, rất đã!",
    createdAt: new Date("2026-04-17T09:15:00.000Z").toISOString(),
  },
  {
    id: "1002",
    name: "Alex",
    message: "Cẩn thận Creeper nhé, tôi vừa bị nổ bay nửa căn cứ!",
    createdAt: new Date("2026-04-17T08:30:00.000Z").toISOString(),
  },
  {
    id: "1001",
    name: "Steve",
    message: "Vừa tìm thấy hang kim cương, ai muốn đi mine cùng tôi không?",
    createdAt: new Date("2026-04-17T08:00:00.000Z").toISOString(),
  },
];
