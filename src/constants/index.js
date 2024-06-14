import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Use of Cookies",
  "Terms of Use",
  "Sales and Refunds",
  "Legal",
  "Site Map",
];

///////////////////////////////////////////
///////////////////////////////////////////

/* export const navLists = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
]; */

/* export const navLists = [
  { name: "Store", submenu: ["Shop the Latest", "Mac", "iPad", "iPhone", "Apple Watch", "Accessories"] },
  { name: "Mac", submenu: ["Explore All Mac", "MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Displays" ] },
  { name: "iPad", submenu: ["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards"] },
  { name: "iPhone", submenu: ["Explore All iPhone", "iPhone 15 Pro", "iPhone 15", "iPhone 14", "iPhone 13", "iPhone SE"] },
  { name: "Watch", submenu: ["Explore All Apple Watch", "Apple Watch Series 9", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "Apple Watch Hermès"] },
  { name: "Vision", submenu: ["Explore All Apple Vision Pro"] },
  { name: "AirPods", submenu: ["Explore All AirPods", "AirPods Pro (2nd generation)", "AirPods (2nd generation)", "AirPods (3rd generation)", "AirPods Max",] },
  { name: "TV & Home", submenu: ["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod mini",] },
  { name: "Entertainment", submenu: ["Explore Entertainment", "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"] },
  { name: "Accessories", submenu: ["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision Pro", "AirPods", "TV & Home"] },
  { name: "Support", submenu: ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"] },
]; */

// 1-11
export const navLists = [
  {
    // 1
    name: "Store",
    title: "Shop",
    title2: "Quick Links",
    title3: "Shop Special Stores",
    submenu: [
      "Shop the Latest",
      "Mac",
      "iPad",
      "iPhone",
      "Apple Watch",
      "Apple Vision Pro",
      "Accessories",
    ],
    submenu2: ["Find a Store", "Order Status", "Apple Trade In", "Financing"],
    submenu3: ["Certified Refurbished", "Education", "Business"],
  },

  {
    // 2
    name: "Mac",
    title: "Explore Mac",
    title2: "Shop Mac",
    title3: "More from Mac",
    submenu: [
      "Explore All Mac",
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "Mac Studio",
      "Mac Pro",
      "Displays",
    ],
    submenu2: ["Shop Mac", "Mac Accessories", "Apple Trade In", "Financing"],
    submenu3: [
      "Mac Support",
      "AppleCare+ for Mac",
      "macOS Sonoma",
      "Apps by Apple",
      "Continuity",
      "iCloud+",
      "Mac for Business",
      "Education",
    ],
  },

  {
    // 3
    name: "iPad",
    title: "Explore iPad",
    title2: "Shop iPad",
    title3: "More from iPad",
    submenu: [
      "Explore All iPad",
      "iPad Pro",
      "iPad Air",
      "iPad",
      "iPad mini",
      "Apple Pencil",
      "Keyboards",
    ],
    submenu2: ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"],
    submenu3: [
      "iPad Support",
      "AppleCare+ for iPad",
      "iPados 17",
      "Apps by Apple",
      "iCloud+",
      "Education",
    ],
  },

  {
    // 4
    name: "iPhone",
    title: "Explore iPhone",
    title2: "Shop iPhone",
    title3: "More from iPhone",
    submenu: [
      "Explore All iPhone",
      "iPhone 15 Pro",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPhone SE",
    ],
    submenu2: [
      "Shop iPhone",
      "iPhone Accessories",
      "Apple Trade In",
      "Financing",
    ],
    submenu3: [
      "iPhone Support",
      "AppleCare+ for iPhone",
      "iOS 17",
      "Apps by Apple",
      "iPhone Privacy",
      "iCloud+",
      "Wallet, Pay",
      "Siri",
    ],
  },

  {
    // 5
    name: "Watch",
    title: "Explore Watch",
    title2: "Shop Watch",
    title3: "More From Watch",
    submenu: ["Explore All Apple Watch",
"Apple Watch Series 9",
"Apple Watch Ultra 2",
"Apple Watch SE",
"Apple Watch Nike",
"Apple Watch Hermès"],
    submenu2: ["Shop Apple Watch",
"Apple Watch Studio",
"Apple Watch Straps",
"Apple Watch Accessories",
"Apple Trade In",
"Financing"],
    submenu3: ["Apple Watch Support",
"AppleCare+",
"watchOS 10",
"Apps by Apple",
"Apple Fitness+"],
  },
  // 6

  {
    name: "Vision",
    title: "Explore Vision",
    title2: "Shop Vision",
    title3: "NULL!!!",
    submenu: ["Explore Apple Vision Pro"],
    submenu2: ["Shop Apple Vision Pro",
      "Apple Vision Pro Accessories"],
    submenu3: ["NULL!!!"],
  },

  {
    // 7
    name: "AirPods",
    title: "Explore AirPods",
    title2: "Shop AirPods",
    title3: "More from AirPods",
    submenu: ["Explore All AirPods",
"AirPods Pro (2nd generation)",
"AirPods (2nd generation)",
"AirPods (3rd generation)",
"AirPods Max"],
    submenu2: ["Shop AirPods",
"AirPods Accessories"],
    submenu3: ["AirPods Support",
"AppleCare+ for Headphones",
"Apple Music"],
  },

  {
    // 8
    name: "TV & Home",
    title: "Explore TV & Home",
    title2: "Shop TV & Home",
    title3: "More from TV & Home",
    submenu: ["Explore TV & Home",
"Apple TV 4K",
"HomePod",
"HomePod mini"],
    submenu2: ["Shop Apple TV 4K",
"Shop HomePod",
"Shop HomePod mini",
"Shop Siri Remote",
"TV & Home Accessories"],
    submenu3: ["Apple TV Support",
"HomePod Support",
"AppleCare+",
"Apple TV app",
"Apple TV+",
"Home app",
"Apple Music",
"Siri",
"AirPlay"],
  },

  {
    // 9
    name: "Entertainment",
    title: "",
    title2: "",
    title3: "",
    submenu: [],
    submenu2: [],
    submenu3: [],
  },

  {
    // 10
    name: "Accessories",
    title: "",
    title2: "",
    title3: "",
    submenu: [],
    submenu2: [],
    submenu3: [],
  },

  {
    // 11
    name: "Support",
    title: "",
    title2: "",
    title3: "",
    submenu: [],
    submenu2: [],
    submenu3: [],
  },
];







export const navSubLinks_Search = [
  { name: "Quick Links", link: "/item1" },
  { name: "Find a Store", link: "/item2" },
  { name: "Accessories", link: "/item1" },
  { name: "AirPods", link: "/item2" },
  { name: "AirTag", link: "/item1" },
  { name: "Apple Trade In", link: "/item2" },
];
