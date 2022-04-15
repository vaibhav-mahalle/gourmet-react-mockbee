import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indian",
    categoryImg:"https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/highly-rated_qyQHoyeQD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271278",
  },
  {
    _id: uuid(),
    categoryName: "Chinese",
    categoryImg:"https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/chinese-cuisine.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649414179608",
  },
  {
    _id: uuid(),
    categoryName: "Dessert",
    categoryImg:"https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/highly-rated_qyQHoyeQD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271278",
  },
  {
    _id: uuid(),
    categoryName: "FastFood",
    categoryImg:"https://ik.imagekit.io/j6wafbf7rcj/Gourmet_React/assets/mcdonald_s-removebg-preview_d3cfZ7mWP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649411271442",
  
  },
];
