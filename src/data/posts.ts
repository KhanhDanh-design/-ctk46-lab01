export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  tags: string[];
  author: string;
}

const AUTHOR = "Danh Nguyen Tuan Khanh - 2212390";

export const posts: Post[] = [
  {
    slug: "sinh-ton-dem-dau-tien",
    title: "Huong Dan Sinh Ton Trong Dem Dau Tien",
    excerpt:
      "Checklist nhanh de song sot ngay dau: go, da, than va mot noi tru an toan truoc khi quái vat xuat hien.",
    date: "2026-04-17",
    tags: ["Survival", "Beginner", "Minecraft"] ,
    author: AUTHOR,
    content: [
      "Ngay khi vao the gioi, uu tien chat cay de tao cuoc va ban che tao co ban.",
      "Tim da som de nang cap len cuoc da, kiem da va lo nung truoc luc troi toi.",
      "Neu chua xay xong nha, dao nhanh mot ham nho 3x2, dat cua va duoc den bang duoc hoac duoc khoi than.",
    ],
  },
  {
    slug: "co-ban-redstone-cua-tu-dong",
    title: "Co Ban Ve Redstone: Cua Tu Dong Bang Pressure Plate",
    excerpt:
      "Lam quen voi redstone thong qua mot cong trinh don gian, de hoc logic bat tat va do tre tin hieu.",
    date: "2026-04-15",
    tags: ["Redstone", "Automation"],
    author: AUTHOR,
    content: [
      "Dung pressure plate o hai dau cua ra de kich hoat cua sat mo tu dong.",
      "Dat redstone dust noi pressure plate den cua sat theo duong ngan nhat de giam hao hut tin hieu.",
      "Co the them repeater de can bang thoi gian mo cua neu hanh lang dai.",
    ],
  },
  {
    slug: "tim-kim-cuong-hieu-qua-1-20",
    title: "Cach Tim Kim Cuong Hieu Qua Trong Phien Ban 1.20+",
    excerpt:
      "Toi uu hoa viec dao khoang bang strip mining o do cao hop ly de tang ti le gap kim cuong.",
    date: "2026-04-13",
    tags: ["Mining", "Diamond", "Guide"],
    author: AUTHOR,
    content: [
      "Do cao Y -58 van la vi tri duoc game thu uu tien de strip mining.",
      "Mang theo du day, thuoc an va water bucket de tranh roi vao dung nham bat ngo.",
      "Khi thay deepslate kim cuong, dao mo rong xung quanh vi vein co the an o cac mat ben.",
    ],
  },
  {
    slug: "xay-trang-trai-lua-mi-tu-dong",
    title: "Xay Trang Trai Lua Mi Tu Dong Co Dan Lang",
    excerpt:
      "Huong dan dung farmer villager de thu hoach va phan phoi lua mi tu dong cho kho luu tru.",
    date: "2026-04-10",
    tags: ["Farm", "Villager", "Automation"],
    author: AUTHOR,
    content: [
      "Can mot farmer villager va mot hopper minecart de thu vat pham roi xuong.",
      "Rao khu vuc can than de tranh mob xam nhap lam gian doan qua trinh farm.",
      "Ket noi he thong kho bang hopper va chest theo tung module de de nang cap.",
    ],
  },
  {
    slug: "thiet-ke-can-cu-ngam-an-toan",
    title: "Thiet Ke Can Cu Ngam An Toan Phong Creeper",
    excerpt:
      "Y tuong bo cuc can cu ngam theo tung khu chuc nang, vua dep vua an toan cho che do sinh ton lau dai.",
    date: "2026-04-07",
    tags: ["Build", "Base Design", "Survival"],
    author: AUTHOR,
    content: [
      "Chia can cu thanh 3 vung: che tao, kho vat pham va nong nghiep de toi uu di chuyen.",
      "Dung den am tran va slab de giam spawn mob trong hanh lang trung tam.",
      "Them cua sat va camera quan sat bang khe kinh de theo doi ben ngoai an toan.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
