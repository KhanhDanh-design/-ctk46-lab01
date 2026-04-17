export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  detail: string[];
  tech: string[];
  status: "Hoàn thành" | "Đang thi công";
  author: string;
}

const AUTHOR = "Danh Nguyễn Tuấn Khanh - 2212390";

export const projects: Project[] = [
  {
    id: "sieu-do-thi-ngam-redstone",
    name: "Siêu Đô Thị Ngầm Redstone",
    shortDescription:
      "Công trình căn cứ ngầm với hệ thống cửa bảo mật, thang máy piston và kho tự động.",
    detail: [
      "Toàn bộ khu đô thị được xây dưới lớp đá deepslate, chia thành các khu nhà ở và xưởng chế tạo.",
      "Sử dụng Redstone để điều khiển cửa tổng, đèn theo giờ và báo động khi có mob xâm nhập.",
      "Kết nối kho lưu trữ trung tâm bằng hệ thống hopper theo từng loại tài nguyên.",
    ],
    tech: ["Minecraft Survival", "Redstone", "WorldEdit Planning"],
    status: "Đang thi công",
    author: AUTHOR,
  },
  {
    id: "farm-lua-mi-tu-dong-mark-2",
    name: "Hệ Thống Farm Lúa Mì Tự Động Mark II",
    shortDescription:
      "Trang trại lúa mì tự động dùng villager, có bộ đếm sản lượng và kho module hóa.",
    detail: [
      "Farm sử dụng farmer villager để thu hoạch và ném lúa cho module thu gom.",
      "Bộ đếm item hopper-clock giúp thống kê năng suất theo chu kỳ 10 phút.",
      "Mở rộng thêm line kho dự phòng cho lúa mì, hạt giống và bánh mì.",
    ],
    tech: ["Villager AI", "Hopper System", "Redstone Clock"],
    status: "Hoàn thành",
    author: AUTHOR,
  },
  {
    id: "lau-dai-phong-thu-nether-portal",
    name: "Lâu Đài Phòng Thủ Portal Nether",
    shortDescription:
      "Khu phòng thủ portal với moat nước, cung bắn tên và lối thoát hiểm dưới lòng đất.",
    detail: [
      "Thiết kế theo phong cách đá cổ điển với tường cao và tháp canh sát 4 góc.",
      "Portal Nether được đặt trong vùng trung tâm và bảo vệ bằng 2 lớp cửa sắt.",
      "Thêm hầm thoát hiểm nối ra khu rừng bên ngoài để đảm bảo an toàn trong raid.",
    ],
    tech: ["Defensive Build", "Combat Planning", "Nether Routing"],
    status: "Đang thi công",
    author: AUTHOR,
  },
  {
    id: "he-thong-duong-sat-lien-vung",
    name: "Hệ Thống Đường Sắt Liên Vùng",
    shortDescription:
      "Mạng đường ray kết nối căn cứ chính, khu mine và làng dân với lịch trình tự động.",
    detail: [
      "Dùng powered rail theo chu kỳ để tối ưu tốc độ và tiết kiệm vàng.",
      "Mỗi ga có bộ chuyển hướng minecart theo màu để tránh nhầm tuyến.",
      "Đường sắt chạy xuyên 3 biome chính, tạo trục giao thông ổn định cho server.",
    ],
    tech: ["Rail System", "Minecart Logic", "Infrastructure"],
    status: "Hoàn thành",
    author: AUTHOR,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
