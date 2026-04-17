export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  detail: string[];
  tech: string[];
  status: "Hoan thanh" | "Dang thi cong";
  author: string;
}

const AUTHOR = "Danh Nguyen Tuan Khanh - 2212390";

export const projects: Project[] = [
  {
    id: "sieu-do-thi-ngam-redstone",
    name: "Sieu Do Thi Ngam Redstone",
    shortDescription:
      "Cong trinh can cu ng am voi he thong cua bao mat, thang may piston va kho tu dong.",
    detail: [
      "Toan bo khu do thi duoc xay duoi lop da deepslate, chia thanh cac khu nha o va xuong che tao.",
      "Su dung redstone de dieu khien cua tong, den theo gio va bao dong khi co mob xam nhap.",
      "Ket noi kho luu tru trung tam bang he thong hopper theo tung loai tai nguyen.",
    ],
    tech: ["Minecraft Survival", "Redstone", "WorldEdit Planning"],
    status: "Dang thi cong",
    author: AUTHOR,
  },
  {
    id: "farm-lua-mi-tu-dong-mark-2",
    name: "He Thong Farm Lua Mi Tu Dong Mark II",
    shortDescription:
      "Trang trai lua mi tu dong dung villager, co bo dem san luong va kho module hoa.",
    detail: [
      "Farm su dung farmer villager de thu hoach va nem lua cho module thu gom.",
      "Bo dem item hopper-clock giup thong ke nang suat theo chu ky 10 phut.",
      "Mo rong them line kho du phong cho lua mi, hat giong va banh mi.",
    ],
    tech: ["Villager AI", "Hopper System", "Redstone Clock"],
    status: "Hoan thanh",
    author: AUTHOR,
  },
  {
    id: "lau-dai-phong-thu-nether-portal",
    name: "Lau Dai Phong Thu Portal Nether",
    shortDescription:
      "Khu phong thu portal voi moat nuoc, cung ban ten va luong thoat hiem duoi long dat.",
    detail: [
      "Thiet ke theo phong cach da co dien voi tuong cao va thap canh sat 4 goc.",
      "Portal nether duoc dat trong vung trung tam va bao ve bang 2 lop cua sat.",
      "Them ham thoat hiem noi ra khu rung ben ngoai de dam bao an toan trong raid.",
    ],
    tech: ["Defensive Build", "Combat Planning", "Nether Routing"],
    status: "Dang thi cong",
    author: AUTHOR,
  },
  {
    id: "he-thong-duong-sat-lien-vung",
    name: "He Thong Duong Sat Lien Vung",
    shortDescription:
      "Mang duong ray ket noi can cu chinh, khu mine va lang dan voi lich trinh tu dong.",
    detail: [
      "Dung powered rail theo chu ky de toi uu toc do va tiet kiem vang.",
      "Moi ga co bo chuyen huong minecart theo mau de tranh nham tuyen.",
      "Duong sat chay xuyen 3 biome chinh, tao truc giao thong on dinh cho server.",
    ],
    tech: ["Rail System", "Minecart Logic", "Infrastructure"],
    status: "Hoan thanh",
    author: AUTHOR,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
