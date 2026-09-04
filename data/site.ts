export const site = {
  name: "Panama Squash Co.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://panamasquash.com",
  email: "info@panamasquash.com",
  phone: "+507 6782-3739",
  whatsapp: "https://wa.me/50767823739?text=Hello%20Panama%20Squash%20Co.%2C%20I%20would%20like%20more%20information%20about%20your%20products.",
  address: "Calle del Estudiante, Pesé, Herrera, Panamá",
};

export type Product = { slug: string; name: string; scientific: string; image: string; description: string; features: string[] };
export const products: Product[] = [
  { slug:"squash", name:"Squash", scientific:"Cucurbita maxima", image:"https://panamasquash.com/wp-content/uploads/2023/11/390bff30-431d-41c0-9bc2-05a8b4f9ba4f.jpg", description:"Selected varieties with excellent texture and flavor, prepared for national and international markets.", features:["Arjuna F1, Leela 104 F1, Butternut & Musquée de Provence","14 kg export bags","Approx. 1,500 bags / 21,000 kg per container"] },
  { slug:"watermelon", name:"Quetzali Watermelon", scientific:"Citrullus lanatus", image:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0129-1030x773.jpg", description:"A seeded variety valued for its vivid color and clean, refreshing flavor.", features:["Excellent flavor and color","Seeded variety","Sizes 3, 4, 5, 6 and 7 per box"] },
  { slug:"pineapple", name:"Pineapple", scientific:"Ananas comosus", image:"https://panamasquash.com/wp-content/uploads/2023/09/IMG_8482-1-1030x773.jpg", description:"Naturally sweet fruit selected for color, texture and consistent presentation.", features:["Naturally sweet","Excellent flavor, color and texture","Multiple sizes available"] },
];

export const gallery = [
  {src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0142-773x1030.jpg",alt:"Fresh agricultural produce from Panama"},
  {src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0129-1030x773.jpg",alt:"Watermelons selected for packing"},
  {src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG_20230303_172330-1030x773.jpg",alt:"Panamanian agricultural field"},
  {src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0138-1030x773.jpg",alt:"Harvest prepared for quality selection"},
  {src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG_8482-1-1030x773.jpg",alt:"Fresh pineapple production"},
];

export const posts = [
  {slug:"a-quality-first-approach",category:"Production",date:"September 28, 2023",title:"A quality-first approach, from field to packing",excerpt:"How careful selection protects product quality throughout the journey.",image:gallery[3].src},
  {slug:"panama-strategic-origin",category:"Export",date:"September 21, 2023",title:"Panama: a strategic origin for agricultural trade",excerpt:"Tropical growing conditions meet a globally connected location.",image:gallery[2].src},
  {slug:"know-your-squash",category:"Products",date:"September 14, 2023",title:"Getting to know our squash varieties",excerpt:"A closer look at the qualities and formats available for buyers.",image:products[0].image},
];
