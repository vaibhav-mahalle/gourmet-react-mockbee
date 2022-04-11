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
    title: "Ice cream",
    quantity: "1",
    price: 250,
    rating: "4.5",
    category: "Dessert",
    storeName: "Chitale",
    isVeg: true,
    fastDelivery: true,
    offer: false,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/top_picks_0hQo67utb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411272576",
    isLiked: false,
    title: "Biryani",
    quantity: "1",
    price: 520,
    rating: "4.3",
    category: "Indian",
    storeName: "Behrouz",
    isVeg: true,
    fastDelivery: true,
    offer: false,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/chinese-cuisine.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649414179608",
    isLiked: false,
    title: "Noodles",
    quantity: "1",
    price: 250,
    rating: "3.4",
    category: "Chinese",
    storeName: "Wok Express",
    isVeg: true,
    fastDelivery: true,
    offer: false,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/mcdonald_s-removebg-preview_d3cfZ7mWP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271442",
    isLiked: false,
    title: "Burger",
    quantity: "1",
    price: 120,
    rating: "4.1",
    category: "Dessert",
    storeName: "McDonald's",
    isVeg: false,
    fastDelivery: true,
    offer: false,
  },

  {
    _id: uuid(),
    imageUrl: "https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/highly-rated_qyQHoyeQD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271278",
    isLiked: false,
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
