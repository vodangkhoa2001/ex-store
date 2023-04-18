const { default: images } = require("~/assets/images");

const Products = [
  {
    id: 1,
    namePro: "HAVIT HV-G92 Gamepad",
    price: 160,
    discountPrice: 120,
    discount: true,
    discountPercent: 40,
    rating: 3.5,
    numRate: 99,
    size: false,
    size_value: [],
    colors: ["bg-red-600", "bg-blue-600"],
    buoght: 88,
    images: [
      images.taycam,
      images.havit_blue,
      images.havit_both,
      images.havit_red,
      images.havit_red,
    ],
    category: ["gaming"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 2,
    namePro: "AK-900 Wired Keyboard",
    price: 1160,
    discountPrice: 960,
    discount: true,
    discountPercent: 35,
    rating: 4.2,
    numRate: 120,
    size: false,
    size_value: [],
    colors: ["bg-black", "bg-white"],
    buoght: 509,
    images: [images.keyboard],
    category: ["gaming", "computer"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 3,
    namePro: "The North Coat",
    price: 360,
    discountPrice: 260,
    discount: false,
    discountPercent: 40,
    rating: 3.5,
    numRate: 99,
    size: false,
    size_value: [],
    colors: [],
    buoght: 700,
    images: [images.gucci_coat],
    category: ["fashion", "jacket"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 4,
    namePro: "S-Series Comfort Chair",
    price: 1360,
    discountPrice: 1260,
    discount: false,
    discountPercent: 35,
    rating: 4.2,
    numRate: 120,
    size: false,
    size_value: [],
    colors: [],
    buoght: 200,
    images: [images.s_series_chair],
    category: ["houseware"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 5,
    namePro: "Small Bookself",
    price: 160,
    discountPrice: 100,
    discount: true,
    discountPercent: 40,
    rating: 3.5,
    numRate: 99,
    size: false,
    size_value: [],
    colors: [],
    buoght: 78,
    images: [images.small_bookself],
    category: ["houseware"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 6,
    namePro: "Gucci Bag",
    price: 1160,
    discountPrice: 960,
    discount: false,
    discountPercent: 35,
    rating: 4.2,
    numRate: 120,
    size: false,
    size_value: [],
    colors: [],
    buoght: 132,
    images: [images.gucci_bag],
    category: ["fashion"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 7,
    namePro: "RGB CPU Cooler",
    price: 1260,
    discountPrice: 980,
    discount: false,
    discountPercent: 35,
    rating: 4.2,
    numRate: 67,
    size: false,
    size_value: [],
    colors: ["bg-black", "bg-white"],
    buoght: 99,
    images: [images.rgb_cooler],
    category: ["gaming"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 8,
    namePro: "IPS LCD Gaming Monitor",
    price: 2260,
    discountPrice: 1980,
    discount: true,
    discountPercent: 25,
    rating: 4.2,
    numRate: 67,
    size: false,
    size_value: [],
    colors: ["bg-black", "bg-white"],
    buoght: 79,
    images: [images.monitor],
    category: ["gaming"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    id: 9,
    namePro: "Nike CR7",
    price: 3260,
    discountPrice: 2980,
    discount: true,
    discountPercent: 25,
    rating: 4.2,
    numRate: 67,
    size: true,
    size_value: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    colors: ["bg-black", "bg-white"],
    buoght: 79,
    images: [images.nike_cr7],
    category: ["sport"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive",
  },
  {
    id: 10,
    namePro: "Ball Primier League 2022",
    price: 220,
    discountPrice: 180,
    discount: true,
    discountPercent: 15,
    rating: 4.7,
    numRate: 102,
    size: false,
    size_value: [],
    colors: ["white"],
    buoght: 280,
    images: [images.ball_primer_league],
    category: ["sport"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
];

export default Products;