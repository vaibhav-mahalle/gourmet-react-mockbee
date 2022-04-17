import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/chitale_ice_cream_a632JDE4u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411270135",
    isLiked: false,
    prevPrice: 300,
    title: "Ice cream",
    quantity: "1",
    price: 250,
    rating: "4.5",
    category: "Dessert",
    storeName: "Chitale",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isDessert: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Dessert_Donut.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649753980987",
    isLiked: false,
    prevPrice: 180,
    title: "Donut",
    quantity: "1",
    price: 150,
    rating: "4.5",
    category: "Dessert",
    storeName: "Mad Over Donut",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isDessert: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Dessert_Waffle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649754003264",
    isLiked: false,
    prevPrice: 400,
    title: "Waffle",
    quantity: "1",
    price: 350,
    rating: "1.3",
    category: "Dessert",
    storeName: "Belgian Waffle",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isDessert: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Dessert_Faluda.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649754047683",
    isLiked: false,
    prevPrice: 150,
    title: "Faluda",
    quantity: "1",
    price: 100,
    rating: "2.4",
    category: "Dessert",
    storeName: "Faluda House",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isDessert: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Halwa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649755992610",
    isLiked: false,
    prevPrice: 240,
    title: "Gajar Halwa",
    quantity: "1",
    price: 200,
    rating: "3.7",
    category: "Dessert",
    storeName: "Chitale",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isDessert: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/top_picks_0hQo67utb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411272576",
    isLiked: false,
    prevPrice: 600,
    title: "Biryani",
    quantity: "1",
    price: 520,
    rating: "4.3",
    category: "Indian",
    storeName: "Behrouz",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isIndian: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Indian_paneer.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649754071543",
    isLiked: false,
    prevPrice: 400,
    title: "Paneer Lababdar",
    quantity: "1",
    price: 300,
    rating: "4.3",
    category: "Indian",
    storeName: "House of Paneer",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isIndian: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Indian_pavbhaji.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649754093195",
    isLiked: false,
    prevPrice: 180,
    title: "Pav Bhaji",
    quantity: "1",
    price: 120,
    rating: "4.0",
    category: "Indian",
    storeName: "MH12 pavbhaji",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isIndian: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Indian_Misal_pav.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649754159443",
    isLiked: false,
    prevPrice: 120,
    title: "Misal Pav",
    quantity: "1",
    price: 80,
    rating: "4.9",
    category: "Indian",
    storeName: "Katakirr Misal",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isIndian: true,
  },
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/Indian_Chhole_Bhature.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649754131183",
    isLiked: false,
    prevPrice: 240,
    title: "Chhole Bhature",
    quantity: "1",
    price: 180,
    rating: "4.9",
    category: "Indian",
    storeName: "Veera da Dhaba",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isIndian: true,
  },
  
  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/chinese-cuisine.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649414179608",
    isLiked: false,
    prevPrice: 300,
    title: "Noodles",
    quantity: "1",
    price: 250,
    rating: "3.4",
    category: "Chinese",
    storeName: "Wok Express",
    isVeg: true,
    fastDelivery: true,
    offer: false,
    isChinese: true,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/mcdonald_s-removebg-preview_d3cfZ7mWP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271442",
    isLiked: false,
    prevPrice: 150,
    title: "Burger",
    quantity: "1",
    price: 120,
    rating: "4.1",
    category: "FastFood",
    storeName: "McDonald's",
    isVeg: false,
    fastDelivery: true,
    offer: false,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/highly-rated_qyQHoyeQD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271278",
    isLiked: false,
    prevPrice: 120,
    title: "Idly",
    quantity: "1",
    price: 70,
    rating: "4.7",
    category: "Indian",
    storeName: "MTR",
    isVeg: true,
    fastDelivery: true,
    offer: false,
  },
  
];
