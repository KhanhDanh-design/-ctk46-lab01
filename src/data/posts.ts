export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  tags: string[];
  author: string;
}

const AUTHOR = "Danh Nguyễn Tuấn Khanh - 2212390";

export const posts: Post[] = [
  {
    slug: "sinh-ton-dem-dau-tien",
    title: "Hướng Dẫn Sinh Tồn Trong Đêm Đầu Tiên",
    excerpt:
      "Checklist nhanh để sống sót ngày đầu: gỗ, đá, than và một nơi trú ẩn an toàn trước khi quái vật xuất hiện.",
    date: "2026-04-17",
    tags: ["Survival", "Beginner", "Minecraft"],
    author: AUTHOR,
    content: [
      "Ngay khi vào thế giới, ưu tiên chặt cây để tạo cuốc và bàn chế tạo cơ bản.",
      "Tìm đá sớm để nâng cấp lên cuốc đá, kiếm đá và lò nung trước lúc trời tối.",
      "Nếu chưa xây xong nhà, đào nhanh một hầm nhỏ 3x2, đặt cửa và đuốc để thắp sáng.",
    ],
  },
  {
    slug: "co-ban-redstone-cua-tu-dong",
    title: "Cơ Bản Về Redstone: Cửa Tự Động Bằng Pressure Plate",
    excerpt:
      "Làm quen với Redstone thông qua một công trình đơn giản để học logic bật tắt và độ trễ tín hiệu.",
    date: "2026-04-15",
    tags: ["Redstone", "Automation"],
    author: AUTHOR,
    content: [
      "Dùng pressure plate ở hai đầu cửa ra để kích hoạt cửa sắt mở tự động.",
      "Đặt Redstone dust nối pressure plate đến cửa theo đường ngắn nhất để giảm hao hụt tín hiệu.",
      "Có thể thêm repeater để cân bằng thời gian mở cửa nếu hành lang dài.",
    ],
  },
  {
    slug: "tim-kim-cuong-hieu-qua-1-20",
    title: "Cách Tìm Kim Cương Hiệu Quả Trong Phiên Bản 1.20+",
    excerpt:
      "Tối ưu hóa việc đào khoáng bằng strip mining ở độ cao hợp lý để tăng tỉ lệ gặp kim cương.",
    date: "2026-04-13",
    tags: ["Mining", "Diamond", "Guide"],
    author: AUTHOR,
    content: [
      "Độ cao Y -58 vẫn là vị trí được game thủ ưu tiên để strip mining.",
      "Mang theo đu đủ đồ ăn và water bucket để tránh rơi vào dung nham bất ngờ.",
      "Khi thấy deepslate kim cương, đào mở rộng xung quanh vì vein có thể ẩn ở các mặt bên.",
    ],
  },
  {
    slug: "xay-trang-trai-lua-mi-tu-dong",
    title: "Xây Trang Trại Lúa Mì Tự Động Có Dân Làng",
    excerpt:
      "Hướng dẫn dùng farmer villager để thu hoạch và phân phối lúa mì tự động cho kho lưu trữ.",
    date: "2026-04-10",
    tags: ["Farm", "Villager", "Automation"],
    author: AUTHOR,
    content: [
      "Cần một farmer villager và một hopper minecart để thu vật phẩm rơi xuống.",
      "Rào khu vực cẩn thận để tránh mob xâm nhập làm gián đoạn quá trình farm.",
      "Kết nối hệ thống kho bằng hopper và chest theo từng module để dễ nâng cấp.",
    ],
  },
  {
    slug: "thiet-ke-can-cu-ngam-an-toan",
    title: "Thiết Kế Căn Cứ Ngầm An Toàn Phòng Creeper",
    excerpt:
      "Ý tưởng bố cục căn cứ ngầm theo từng khu chức năng, vừa đẹp vừa an toàn cho chế độ sinh tồn lâu dài.",
    date: "2026-04-07",
    tags: ["Build", "Base Design", "Survival"],
    author: AUTHOR,
    content: [
      "Chia căn cứ thành 3 vùng: chế tạo, kho vật phẩm và nông nghiệp để tối ưu di chuyển.",
      "Dùng đèn âm trần và slab để giảm spawn mob trong hành lang trung tâm.",
      "Thêm cửa sắt và ô quan sát bằng kính để theo dõi bên ngoài an toàn.",
    ],
  },
  {
    slug: "toi-uu-kho-do-bang-he-thong-sorter",
    title: "Tối Ưu Kho Đồ Bằng Hệ Thống Item Sorter",
    excerpt:
      "Cách xây bộ sorter có mở rộng để tự động phân loại item và giảm thời gian tìm đồ trong kho.",
    date: "2026-04-05",
    tags: ["Storage", "Redstone", "Automation"],
    author: AUTHOR,
    content: [
      "Bắt đầu bằng module có 3 hopper, 1 comparator, 1 repeater và 1 Redstone torch cho mỗi loại item.",
      "Đặt item mẫu trong hopper lọc để khóa bộ lọc, tránh item lạ rơi vào nhầm ngăn.",
      "Chia kho theo khu tài nguyên, khối xây dựng và nông phẩm để khi mở rộng không bị rối hệ thống.",
    ],
  },
  {
    slug: "farm-xp-bang-mob-grinder-don-gian",
    title: "Farm XP Bằng Mob Grinder Đơn Giản",
    excerpt:
      "Hướng dẫn dựng tháp spawn cơ bản để farm kinh nghiệm ổn định cho việc enchant đồ nghề.",
    date: "2026-04-03",
    tags: ["XP", "Mob Farm", "Survival"],
    author: AUTHOR,
    content: [
      "Xây tháp spawn cao trên 100 block so với mặt đất để tăng hiệu quả spawn mob trong đêm.",
      "Dùng nước dẫn mob vào trung tâm, rồi cho rơi xuống độ cao vừa đủ để còn ít máu cho một hit kết liễu.",
      "Đặt khối AFK ở khoảng cách phù hợp và thắp đèn khu xung quanh để giảm spawn không mong muốn.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
