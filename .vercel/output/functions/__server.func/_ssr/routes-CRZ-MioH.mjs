import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as ChevronRight, i as Menu, l as ChevronLeft, o as ExternalLink, r as Phone, s as Clock, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRZ-MioH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gioi-thieu",
		className: "bg-bg py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.32em] text-accent",
						children: "Câu chuyện"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
						children: "Nướng than, bàn nhỏ, thịt đúng vị Seoul"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-base leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "KAKAQ là quán BBQ Hàn theo lối hiện đại: nền tối, ánh đèn ấm, bàn nướng than ngay giữa — gần gũi nhưng không ồn ào." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thịt nhập mỗi sáng, thái dày vừa, ướp đúng vị. Banchan làm trong bếp, soju lạnh, nhạc nhỏ. Đến để ăn chậm, nướng cùng người thân." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-widest text-subtle",
								children: "Mở cửa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl text-fg",
								children: "11–23h"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-widest text-subtle",
								children: "Bàn nướng"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl text-fg",
								children: "Than"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-widest text-subtle",
								children: "Thịt"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl text-fg",
								children: "Mỗi ngày"
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/about-interior.jpg",
						alt: "Không gian tối, bàn nướng than tại KAKAQ",
						className: "aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:aspect-[4/5]",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-subtle",
					children: "Đèn vàng, bàn đá, than hồng — không gian được giữ gọn, không thừa chi tiết."
				})]
			})]
		})
	});
}
var LAT = 10.7828;
var LNG = 106.693;
var OSM_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=106.685,10.7768,106.701,10.7888&layer=mapnik&marker=${LAT},${LNG}`;
var GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${LAT},${LNG}`;
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lien-he",
		className: "bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.32em] text-accent",
					children: "Liên hệ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
					children: "Tìm quán"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 rounded-2xl bg-elevated p-6 shadow-[0_0_0_1px_rgba(244,239,232,0.08)] sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: MapPin,
								label: "Địa chỉ",
								value: "88 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh",
								hint: "Địa chỉ mẫu — bạn có thể thay sau"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: Phone,
								label: "Điện thoại",
								value: "0901 888 247",
								href: "tel:0901888247"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: Clock,
								label: "Giờ mở cửa",
								value: "11:00 – 23:00 · Thứ 2 đến Chủ nhật"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-subtle",
								children: "Mạng xã hội"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
										href: "https://facebook.com",
										label: "Facebook"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
										href: "https://instagram.com",
										label: "Instagram"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
										href: "https://zalo.me",
										label: "Zalo"
									})
								]
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-80 overflow-hidden rounded-2xl bg-elevated shadow-[0_0_0_1px_rgba(244,239,232,0.08)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Bản đồ KAKAQ BBQ",
								src: OSM_SRC,
								className: "map-embed h-full min-h-80 w-full border-0",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-elevated to-transparent",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: GOOGLE_MAPS_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "absolute bottom-4 left-4 inline-flex h-11 items-center gap-2 rounded-full bg-bg px-4 text-sm text-fg shadow-[0_0_0_1px_rgba(244,239,232,0.16)] transition-[background-color] duration-150 hover:bg-elevated",
								children: ["Mở Google Maps", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
							})
						]
					})]
				})
			]
		})
	});
}
function Info({ icon: Icon, label, value, href, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 grid size-10 shrink-0 place-items-center rounded-md bg-bg text-accent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-subtle",
				children: label
			}),
			href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				className: "mt-1 block text-fg hover:text-accent",
				children: value
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-fg",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-subtle",
				children: hint
			}) : null
		] })]
	});
}
function Social({ href, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "inline-flex h-11 items-center rounded-full px-4 text-sm text-fg shadow-[0_0_0_1px_rgba(244,239,232,0.14)] transition-[box-shadow,background-color] duration-150 hover:bg-bg hover:shadow-[0_0_0_1px_rgba(244,239,232,0.3)]",
		children: label
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:bg-accent-hover shadow-[0_0_0_1px_rgba(0,0,0,0.2)]",
			cream: "bg-cream text-cream-fg hover:bg-fg",
			outline: "bg-transparent text-fg shadow-[0_0_0_1px_rgba(244,239,232,0.18)] hover:shadow-[0_0_0_1px_rgba(244,239,232,0.36)] hover:bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-elevated"
		},
		size: {
			sm: "h-9 px-3.5",
			md: "h-11 px-5",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var SLIDES = [
	{
		src: "/images/hero-samgyeopsal.jpg",
		alt: "Ba chỉ heo nướng trên bàn than KAKAQ"
	},
	{
		src: "/images/hero-galbi.jpg",
		alt: "Sườn bò ướp nướng cháy cạnh"
	},
	{
		src: "/images/hero-set.jpg",
		alt: "Set nướng Hàn Quốc đầy đủ bàn"
	},
	{
		src: "/images/hero-interior.jpg",
		alt: "Không gian nhà hàng BBQ KAKAQ"
	}
];
var INTERVAL = 5600;
function HeroBanner() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const touchX = (0, import_react.useRef)(null);
	const reduceMotion = usePrefersReducedMotion();
	const go = (0, import_react.useCallback)((dir) => {
		setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
	}, []);
	const jump = (0, import_react.useCallback)((i) => setIndex(i), []);
	(0, import_react.useEffect)(() => {
		if (paused || reduceMotion) return;
		const id = window.setInterval(() => go(1), INTERVAL);
		return () => window.clearInterval(id);
	}, [
		go,
		paused,
		reduceMotion
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "trang-chu",
		className: "relative h-[100svh] min-h-[36rem] overflow-hidden bg-bg",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onTouchStart: (e) => {
			touchX.current = e.touches[0]?.clientX ?? null;
		},
		onTouchEnd: (e) => {
			if (touchX.current == null) return;
			const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
			touchX.current = null;
			if (dx > 48) go(-1);
			else if (dx < -48) go(1);
		},
		children: [
			SLIDES.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 transition-opacity duration-700 ease-out", i === index ? "opacity-100" : "opacity-0"),
				"aria-hidden": i !== index,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.src,
					alt: slide.alt,
					className: cn("h-full w-full object-cover", i === index && !reduceMotion && "hero-kenburns"),
					fetchPriority: i === 0 ? "high" : "low"
				})
			}, slide.src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-medium uppercase tracking-[0.32em] text-accent",
						children: "Korean BBQ · Sài Gòn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-fg sm:text-6xl lg:text-7xl",
						children: "BBQ Nướng KAKAQ — Hương vị Hàn Quốc đích thực"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						children: "Thịt tươi mỗi ngày. Bàn nướng than. Không gian tối, ấm, gọn như Seoul về đêm."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#thuc-don",
								children: "Xem thực đơn"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dat-ban",
								children: "Đặt bàn"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-0 right-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					role: "tablist",
					"aria-label": "Ảnh banner",
					children: SLIDES.map((slide, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": i === index,
						"aria-label": `Ảnh ${i + 1}`,
						onClick: () => jump(i),
						className: cn("h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out", i === index ? "w-8 bg-accent" : "w-2.5 bg-fg/35 hover:bg-fg/55")
					}, slide.src))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden gap-2 sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "size-10 rounded-full bg-bg/40",
						"aria-label": "Ảnh trước",
						onClick: () => go(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "size-10 rounded-full bg-bg/40",
						"aria-label": "Ảnh tiếp",
						onClick: () => go(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					})]
				})]
			})
		]
	});
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const onChange = () => setReduced(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	return reduced;
}
var MENU_ITEMS = [
	{
		id: "samgyeopsal",
		name: "Ba chỉ heo tươi",
		korean: "삼겹살 · Samgyeopsal",
		description: "Ba chỉ dày, nướng than đến lớp mỡ trong veo, vàng đều hai mặt.",
		price: "189.000đ",
		category: "thit",
		image: "/images/menu-samgyeopsal.jpg",
		featured: true
	},
	{
		id: "galbi",
		name: "Sườn bò ướp",
		korean: "양념갈비 · Yangnyeom Galbi",
		description: "Sườn bò ướp tương, tỏi, lê — cháy cạnh, ngọt thịt.",
		price: "259.000đ",
		category: "thit",
		image: "/images/menu-galbi.jpg",
		featured: true
	},
	{
		id: "moksal",
		name: "Cổ heo nướng",
		korean: "목살 · Moksal",
		description: "Thịt cổ săn, nhiều thớ, nướng vừa tới, chấm muối vừng.",
		price: "179.000đ",
		category: "thit",
		image: "/images/menu-moksal.jpg"
	},
	{
		id: "deungsim",
		name: "Thăn bò Hàn",
		korean: "등심 · Deungsim",
		description: "Thăn bò vân mỡ, nướng than, thái lát dày, chảy nước.",
		price: "289.000đ",
		category: "thit",
		image: "/images/menu-deungsim.jpg",
		featured: true
	},
	{
		id: "set-2",
		name: "Set KAKAQ 2 người",
		korean: "커플 세트",
		description: "Ba chỉ, cổ heo, sườn ướp, banchan và rau cuốn cho hai người.",
		price: "599.000đ",
		category: "set",
		image: "/images/menu-set2.jpg",
		featured: true
	},
	{
		id: "set-4",
		name: "Set Hoàng gia 4 người",
		korean: "패밀리 세트",
		description: "Thăn bò, sườn, ba chỉ, cổ heo — đủ bàn, no đến tráng miệng.",
		price: "1.199.000đ",
		category: "set",
		image: "/images/menu-set4.jpg",
		featured: true
	},
	{
		id: "soju",
		name: "Soju",
		korean: "소주",
		description: "Soju lạnh, chai 360ml. Uống chậm, ăn thịt cho đúng điệu.",
		price: "129.000đ",
		category: "douong",
		image: "/images/menu-drinks.jpg"
	},
	{
		id: "beer",
		name: "Bia Hàn",
		korean: "맥주",
		description: "Cass / Terra lạnh, ly lớn. Đi cùng sườn nướng.",
		price: "49.000đ",
		category: "douong",
		image: "/images/menu-drinks.jpg"
	},
	{
		id: "boricha",
		name: "Trà lúa mạch",
		korean: "보리차",
		description: "Trà barley nóng hoặc đá, thanh, không đường.",
		price: "39.000đ",
		category: "douong",
		image: "/images/menu-banchan.jpg"
	}
];
var CATEGORIES = [
	{
		id: "all",
		label: "Tất cả"
	},
	{
		id: "thit",
		label: "Thịt nướng"
	},
	{
		id: "set",
		label: "Set"
	},
	{
		id: "douong",
		label: "Đồ uống"
	}
];
function MenuSection() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => filter === "all" ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "thuc-don",
		className: "bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.32em] text-accent",
						children: "Thực đơn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
						children: "Món signature"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-muted",
						children: "Thịt nướng, set cho bàn, đồ uống. Giá niêm yết theo phần."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Lọc thực đơn",
					children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === cat.id,
						onClick: () => setFilter(cat.id),
						className: cn("h-11 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ease-out", filter === cat.id ? "bg-accent text-accent-fg" : "text-muted shadow-[0_0_0_1px_rgba(244,239,232,0.12)] hover:text-fg hover:shadow-[0_0_0_1px_rgba(244,239,232,0.28)]"),
						children: cat.label
					}, cat.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group h-full overflow-hidden rounded-2xl bg-elevated shadow-[0_0_0_1px_rgba(244,239,232,0.08)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,239,232,0.16)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.name,
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: item.korean
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium text-fg",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "shrink-0 font-medium tabular-nums text-accent",
									children: item.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.description
							})
						]
					})]
				}) }, item.id))
			})]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md bg-elevated px-3.5 text-sm text-fg", "shadow-[0_0_0_1px_rgba(244,239,232,0.1)]", "placeholder:text-subtle", "transition-[box-shadow] duration-150 ease-out", "hover:shadow-[0_0_0_1px_rgba(244,239,232,0.16)]", "focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)]", "disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-lg bg-elevated px-3.5 py-3 text-sm text-fg", "shadow-[0_0_0_1px_rgba(244,239,232,0.1)]", "placeholder:text-subtle", "transition-[box-shadow] duration-150 ease-out", "hover:shadow-[0_0_0_1px_rgba(244,239,232,0.16)]", "focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)]", "resize-y disabled:opacity-50", className),
		...props
	});
}
var STORAGE_KEY = "kakaq-reservations";
var EMPTY = {
	name: "",
	phone: "",
	guests: "2",
	date: todayISO(),
	time: "18:00",
	notes: ""
};
function todayISO() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function isPhone(value) {
	const digits = value.replace(/[\s.-]/g, "");
	return /^(0|\+84)[0-9]{9,10}$/.test(digits);
}
function ReservationSection() {
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const minDate = (0, import_react.useMemo)(() => todayISO(), []);
	function update(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
		setErrors((e) => ({
			...e,
			[key]: void 0
		}));
	}
	function validate(data) {
		const next = {};
		if (data.name.trim().length < 2) next.name = "Nhập họ tên";
		if (!isPhone(data.phone)) next.phone = "Số điện thoại chưa đúng";
		const guests = Number(data.guests);
		if (!Number.isInteger(guests) || guests < 1 || guests > 20) next.guests = "Từ 1 đến 20 người";
		if (!data.date || data.date < minDate) next.date = "Chọn ngày từ hôm nay";
		if (!data.time) next.time = "Chọn giờ";
		else {
			const [h, m] = data.time.split(":").map(Number);
			const minutes = (h ?? 0) * 60 + (m ?? 0);
			if (minutes < 660 || minutes > 1350) next.time = "Nhà hàng nhận bàn 11:00–22:30";
		}
		return next;
	}
	function onSubmit(e) {
		e.preventDefault();
		const next = validate(form);
		if (Object.keys(next).length) {
			setErrors(next);
			return;
		}
		try {
			const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([...prev, {
				...form,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			}]));
		} catch {}
		setSubmitted(form);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dat-ban",
		className: "bg-bg py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.32em] text-accent",
					children: "Đặt bàn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
					children: "Giữ chỗ trước, nướng đúng giờ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-base leading-relaxed text-muted",
					children: "Cuối tuần bàn than thường kín. Gửi yêu cầu, quán gọi lại trong ngày để xác nhận."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Giờ nhận bàn: 11:00 – 22:30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nhóm trên 10 người vui lòng ghi chú" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Giữ bàn 15 phút so với giờ đã hẹn" })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-surface p-6 shadow-[0_0_0_1px_rgba(244,239,232,0.08)] sm:p-8",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-80 flex-col items-start justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-full bg-accent/15 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-3xl text-fg",
							children: "Đã nhận yêu cầu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted",
							children: [
								submitted.name,
								" · ",
								submitted.guests,
								" người · ",
								submitted.date,
								" lúc",
								" ",
								submitted.time
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-subtle",
							children: [
								"Quán sẽ liên hệ ",
								submitted.phone,
								" để xác nhận bàn."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-8",
							onClick: () => {
								setSubmitted(null);
								setForm(EMPTY);
							},
							children: "Gửi yêu cầu khác"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-5",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Họ tên",
							error: errors.name,
							htmlFor: "name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								autoComplete: "name",
								placeholder: "Nguyễn Văn An",
								value: form.name,
								onChange: (e) => update("name", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Số điện thoại",
							error: errors.phone,
							htmlFor: "phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								name: "phone",
								type: "tel",
								inputMode: "tel",
								autoComplete: "tel",
								placeholder: "0901 234 567",
								value: form.phone,
								onChange: (e) => update("phone", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Số người",
									error: errors.guests,
									htmlFor: "guests",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "guests",
										name: "guests",
										type: "number",
										min: 1,
										max: 20,
										value: form.guests,
										onChange: (e) => update("guests", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Ngày",
									error: errors.date,
									htmlFor: "date",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "date",
										name: "date",
										type: "date",
										min: minDate,
										value: form.date,
										onChange: (e) => update("date", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Giờ",
									error: errors.time,
									htmlFor: "time",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "time",
										name: "time",
										type: "time",
										value: form.time,
										onChange: (e) => update("time", e.target.value)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Ghi chú",
							htmlFor: "notes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								name: "notes",
								placeholder: "Sinh nhật, ghế trẻ em, gần cửa sổ…",
								value: form.notes,
								onChange: (e) => update("notes", e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full sm:w-auto",
							children: "Gửi yêu cầu đặt bàn"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor,
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-accent",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#trang-chu",
		className: cn("group flex items-center gap-3", className),
		"aria-label": "KAKAQ BBQ — về trang chủ",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 place-items-center rounded-md bg-accent text-accent-fg font-display text-xl font-semibold leading-none",
			"aria-hidden": true,
			children: "K"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col justify-center leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[1.35rem] font-semibold tracking-[0.22em] text-fg",
				children: "KAKAQ"
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-[0.625rem] font-medium uppercase tracking-[0.42em] text-muted",
				children: "BBQ"
			}) : null]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
					children: "BBQ nướng Hàn Quốc. Thịt tươi, than hồng, bàn gọn."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-subtle",
					children: "Liên kết"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#trang-chu",
							className: "text-muted hover:text-fg",
							children: "Trang chủ"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#thuc-don",
							className: "text-muted hover:text-fg",
							children: "Thực đơn"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#dat-ban",
							className: "text-muted hover:text-fg",
							children: "Đặt bàn"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#lien-he",
							className: "text-muted hover:text-fg",
							children: "Liên hệ"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-subtle",
					children: "Liên hệ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "88 Võ Văn Tần, Quận 3, TP.HCM" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:0901888247",
							className: "hover:text-fg",
							children: "0901 888 247"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "11:00 – 23:00 hàng ngày" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-4 py-5 text-xs text-subtle sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" KAKAQ BBQ. All rights reserved."
				]
			})
		})]
	});
}
var NAV = [
	{
		href: "#trang-chu",
		label: "Trang chủ"
	},
	{
		href: "#thuc-don",
		label: "Thực đơn"
	},
	{
		href: "#dat-ban",
		label: "Đặt bàn"
	},
	{
		href: "#lien-he",
		label: "Liên hệ"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out", scrolled || open ? "bg-bg shadow-[0_0_0_1px_rgba(244,239,232,0.08)]" : "bg-bg/80"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Chính",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-medium text-muted transition-colors duration-150 hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dat-ban",
								children: "Đặt bàn ngay"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						"aria-label": open ? "Đóng menu" : "Mở menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("md:hidden overflow-hidden border-t border-border bg-bg transition-[max-height,opacity] duration-200 ease-out", open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 px-4 py-4",
				"aria-label": "Di động",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center rounded-md px-3 text-base text-fg hover:bg-elevated",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#dat-ban",
						onClick: () => setOpen(false),
						children: "Đặt bàn ngay"
					})
				})]
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
