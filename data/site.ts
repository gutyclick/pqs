export const site={name:"Panama Squash Co.",url:process.env.NEXT_PUBLIC_SITE_URL||"https://panamasquash.com",email:"info@panamasquash.com",phone:"+507 6782-3739",whatsapp:"https://wa.me/50767823739?text=Hola%20Panama%20Squash%20Co.%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos.",address:"Calle del Estudiante, Pesé, Herrera, Panama"};
export type Product={slug:string;name:string;scientific:string;image:string;description:string;features:string[]};
export const products:Product[]=[
{slug:"squash",name:"Squash",scientific:"Cucurbita maxima",image:"/calabaza/portada_calabaza.png",description:"Varieties selected for their outstanding texture and flavor, prepared for domestic and international markets.",features:["Arjuna F1, Improved Arjuna Max, Arjuna Gold, Armaya and Jinia","Approximate weight: 13 kg","2,000 mesh bags"]},
{slug:"watermelon",name:"Watermelon",scientific:"Citrullus lanatus",image:"/sandia/portada_sandia.png",description:"Watermelons selected for their rich color, freshness and distinctive flavor, prepared for different markets.",features:["Seeded and seedless varieties","Sizes 3, 4, 5 and 6","Bins of 36, 45 and 60 units","Container capacity: 1,320 boxes of 16 kg or 60 bins of 350 to 400 kg"]},
{slug:"pineapple",name:"Pineapple",scientific:"Ananas comosus",image:"/piña/portada_pina.png",description:"Naturally sweet fruit selected for its color, texture and consistent presentation.",features:["Natural sweetness","Outstanding flavor, color and texture","Sizes 6 through 10"]}];
export const gallery=[
...Array.from({length:13},(_,i)=>({src:`/general/panama-squash-co-galeria-${String(i+1).padStart(2,"0")}${["jpeg","jpeg","jpeg","jpg","jpg","jpg","jpg","jpeg","jpeg","jpeg","jpeg","jpeg","jpeg"][i]===undefined?"":"."+["jpeg","jpeg","jpeg","jpg","jpg","jpg","jpg","jpeg","jpeg","jpeg","jpeg","jpeg","jpeg"][i]}`,alt:"Panama Squash Co. agricultural production in Panama"})).filter((_,i)=>i!==3),
...[
  "/calabaza/panama-squash-co-calabaza-producto-01.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-02.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-03.jpg",
  "/calabaza/panama-squash-co-calabaza-producto-04.jpg",
  "/calabaza/panama-squash-co-calabaza-producto-06.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-07.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-09.jpg"
].map(src=>({src,alt:"Squash production and selection in Panama"})),
...[
  "/sandia/panama-squash-co-sandia-producto-02.jpg",
  "/sandia/panama-squash-co-sandia-producto-03.jpg",
  "/sandia/panama-squash-co-sandia-producto-04.png",
  "/sandia/panama-squash-co-sandia-producto-07.jpeg",
  "/sandia/panama-squash-co-sandia-producto-08.jpg",
  "/sandia/panama-squash-co-sandia-producto-09.jpeg",
  "/sandia/panama-squash-co-sandia-producto-10.jpeg",
  "/sandia/panama-squash-co-sandia-producto-11.jpeg",
  "/sandia/panama-squash-co-sandia-producto-12.jpeg",
  "/sandia/panama-squash-co-sandia-producto-14.jpg"
].map(src=>({src,alt:"Watermelon growing and selection in Panama"})),
...Array.from({length:2},(_,i)=>({src:`/piña/panama-squash-co-piña-producto-0${i+4}.jpg`,alt:"Pineapples ready for selection and shipping"})),
{src:"/platano/panama-squash-co-platano-producto-04.jpg",alt:"Plantains selected by Panama Squash Co."},
...Array.from({length:5},(_,i)=>({src:`/papaya/panama-squash-co-papaya-producto-${String(i+4).padStart(2,"0")}.${["jpg","jpeg","jpg","jpg","jpeg"][i]}`,alt:"Papayas selected by Panama Squash Co."})),
...Array.from({length:2},(_,i)=>({src:`/melon/panama-squash-co-melon-producto-0${i+4}.${["jpeg","jpg"][i]}`,alt:"Panama Squash Co. Golden Honeydew melon"}))
];
export const posts=[
{slug:"a-quality-first-approach",category:"Production",date:"28 September 2023",title:"Quality from field to packing",excerpt:"How careful selection protects every product throughout its journey.",image:gallery[3].src},{slug:"panama-strategic-origin",category:"Export",date:"21 September 2023",title:"Panama: a strategic origin for agricultural trade",excerpt:"Tropical conditions and a location connected to global markets.",image:gallery[2].src},{slug:"know-your-squash",category:"Products",date:"14 September 2023",title:"Discover our squash varieties",excerpt:"A look at the qualities and formats available to buyers.",image:products[0].image}];

export const squashGallery=[
{src:"/calabaza/panama-squash-co-calabaza-producto-08.jpg",alt:"Squash selected for careful handling"},
{src:"/calabaza/panama-squash-co-calabaza-producto-10.jpg",alt:"Squash received at the packing facility"},
{src:"/calabaza/panama-squash-co-calabaza-producto-05.jpeg",alt:"Panama Squash Co. squash selection"}
];

export const watermelonGallery=[
{src:"/sandia/panama-squash-co-sandia-producto-01.jpeg",alt:"Watermelon growing in Panama"},
{src:"/sandia/panama-squash-co-sandia-producto-05.jpg",alt:"Watermelons harvested in the field"},
{src:"/sandia/panama-squash-co-sandia-producto-06.jpg",alt:"Detail of a selected watermelon"}
];

export const pineappleGallery=[
{src:"/piña/panama-squash-co-piña-producto-01.png",alt:"Pineapple grown and selected in Panama"},
{src:"/piña/panama-squash-co-piña-producto-02.jpg",alt:"Fresh pineapples from Panama Squash Co."},
{src:"/piña/panama-squash-co-piña-producto-03.jpg",alt:"Detail of a pineapple selected for quality"}
];

export type AdditionalProduct={slug:string;name:string;scientific:string;cover:string;description:string;images:{src:string;alt:string}[]};
export const additionalProducts:AdditionalProduct[]=[
{slug:"platano",name:"Plantain",scientific:"Musa paradisiaca",cover:"/platano/portada_platano.png",description:"Agricultural product selected with close attention to condition, presentation and handling for each market's needs.",images:Array.from({length:4},(_,i)=>({src:`/platano/panama-squash-co-platano-producto-${String(i+1).padStart(2,"0")}.jpg`,alt:"Plantains selected by Panama Squash Co."}))},
{slug:"papaya",name:"Papaya",scientific:"Carica papaya",cover:"/papaya/portada_papaya.jpeg",description:"Tropical fruit handled under careful selection and quality criteria, from origin through commercial preparation.",images:[{src:"/papaya/panama-squash-co-papaya-producto-01.jpeg",alt:"Papaya grown in Panama"},...Array.from({length:3},(_,i)=>({src:`/papaya/panama-squash-co-papaya-producto-${String(i+2).padStart(2,"0")}.jpg`,alt:"Papayas selected by Panama Squash Co."}))]},
{slug:"yuca-parafinada",name:"Waxed cassava",scientific:"Manihot esculenta",cover:"/yuca/portada_yuca.png",description:"Roots selected and prepared to protect freshness, presentation and quality during commercial handling.",images:[{src:"/yuca/panama-squash-co-yuca-producto-01.jpg",alt:"Selected waxed cassava"},{src:"/yuca/panama-squash-co-yuca-producto-02.jpeg",alt:"Waxed cassava preparation"}]},
{slug:"melon-golden-honeydew",name:"Golden Honeydew Melon",scientific:"Cucumis melo",cover:"/melon/portada_melon.png",description:"Melons selected for uniformity and presentation, prepared with the care required for consistent delivery.",images:[{src:"/melon/panama-squash-co-melon-producto-01.jpg",alt:"Selected Golden Honeydew melon"},{src:"/melon/panama-squash-co-melon-producto-02.jpeg",alt:"Golden Honeydew melon production"},{src:"/melon/panama-squash-co-melon-producto-03.jpg",alt:"Melons prepared for selection"},{src:"/melon/panama-squash-co-melon-producto-04.jpeg",alt:"Detail of a Golden Honeydew melon"}]}
];
export const productCards=[...products.map(product=>({...product,href:`/products/${product.slug}`})),...additionalProducts.map(product=>({slug:product.slug,name:product.name,scientific:product.scientific,image:product.cover,description:product.description,href:`/products/otros#${product.slug}`}))];
