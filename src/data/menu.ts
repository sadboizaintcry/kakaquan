export type MenuCategory = "thit" | "set" | "douong";

export type MenuItem = {
  id: string;
  name: string;
  korean: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  featured?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "samgyeopsal",
    name: "Ba chỉ heo tươi",
    korean: "삼겹살 · Samgyeopsal",
    description: "Ba chỉ dày, nướng than đến lớp mỡ trong veo, vàng đều hai mặt.",
    price: "189.000đ",
    category: "thit",
    image: "/images/menu-samgyeopsal.jpg",
    featured: true,
  },
  {
    id: "galbi",
    name: "Sườn bò ướp",
    korean: "양념갈비 · Yangnyeom Galbi",
    description: "Sườn bò ướp tương, tỏi, lê — cháy cạnh, ngọt thịt.",
    price: "259.000đ",
    category: "thit",
    image: "/images/menu-galbi.jpg",
    featured: true,
  },
  {
    id: "moksal",
    name: "Cổ heo nướng",
    korean: "목살 · Moksal",
    description: "Thịt cổ săn, nhiều thớ, nướng vừa tới, chấm muối vừng.",
    price: "179.000đ",
    category: "thit",
    image: "/images/menu-moksal.jpg",
  },
  {
    id: "deungsim",
    name: "Thăn bò Hàn",
    korean: "등심 · Deungsim",
    description: "Thăn bò vân mỡ, nướng than, thái lát dày, chảy nước.",
    price: "289.000đ",
    category: "thit",
    image: "/images/menu-deungsim.jpg",
    featured: true,
  },
  {
    id: "set-2",
    name: "Set KAKAQ 2 người",
    korean: "커플 세트",
    description: "Ba chỉ, cổ heo, sườn ướp, banchan và rau cuốn cho hai người.",
    price: "599.000đ",
    category: "set",
    image: "/images/menu-set2.jpg",
    featured: true,
  },
  {
    id: "set-4",
    name: "Set Hoàng gia 4 người",
    korean: "패밀리 세트",
    description: "Thăn bò, sườn, ba chỉ, cổ heo — đủ bàn, no đến tráng miệng.",
    price: "1.199.000đ",
    category: "set",
    image: "/images/menu-set4.jpg",
    featured: true,
  },
  {
    id: "soju",
    name: "Soju",
    korean: "소주",
    description: "Soju lạnh, chai 360ml. Uống chậm, ăn thịt cho đúng điệu.",
    price: "129.000đ",
    category: "douong",
    image: "/images/menu-drinks.jpg",
  },
  {
    id: "beer",
    name: "Bia Hàn",
    korean: "맥주",
    description: "Cass / Terra lạnh, ly lớn. Đi cùng sườn nướng.",
    price: "49.000đ",
    category: "douong",
    image: "/images/menu-drinks.jpg",
  },
  {
    id: "boricha",
    name: "Trà lúa mạch",
    korean: "보리차",
    description: "Trà barley nóng hoặc đá, thanh, không đường.",
    price: "39.000đ",
    category: "douong",
    image: "/images/menu-banchan.jpg",
  },
];

export const CATEGORIES: { id: "all" | MenuCategory; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "thit", label: "Thịt nướng" },
  { id: "set", label: "Set" },
  { id: "douong", label: "Đồ uống" },
];
