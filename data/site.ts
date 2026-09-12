export const site={name:"Panama Squash Co.",url:process.env.NEXT_PUBLIC_SITE_URL||"https://panamasquash.com",email:"info@panamasquash.com",phone:"+507 6782-3739",whatsapp:"https://wa.me/50767823739?text=Hola%20Panama%20Squash%20Co.%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos.",address:"Calle del Estudiante, Pesé, Herrera, Panamá"};
export type Product={slug:string;name:string;scientific:string;image:string;description:string;features:string[]};
export const products:Product[]=[
{slug:"squash",name:"Calabaza",scientific:"Cucurbita maxima",image:"/calabaza/portada_calabaza.png",description:"Variedades seleccionadas por su excelente textura y sabor, preparadas para mercados nacionales e internacionales.",features:["Arjuna F1, Arjuna Max Mejorado, Arjuna Gold, Armaya y Jinia","Peso aproximado de 13 kg","2,000 mallas"]},
{slug:"watermelon",name:"Sandía",scientific:"Citrullus lanatus",image:"/sandia/portada_sandia.png",description:"Sandías seleccionadas por su color intenso, frescura y sabor definido, preparadas para distintos mercados.",features:["Variedades con semilla y sin semilla","Calibres 3, 4, 5 y 6","Bines de 36, 45 y 60 unidades","Cantidad por contenedor: 1,320 cajas de 16 kg o 60 bines de 350 a 400 kg"]},
{slug:"pineapple",name:"Piña",scientific:"Ananas comosus",image:"/piña/portada_pina.png",description:"Fruta naturalmente dulce, seleccionada por su color, textura y presentación consistente.",features:["Dulzura natural","Excelente sabor, color y textura","Calibres del 6 al 10"]}];
export const gallery=[
...Array.from({length:13},(_,i)=>({src:`/general/panama-squash-co-galeria-${String(i+1).padStart(2,"0")}${["jpeg","jpeg","jpeg","jpg","jpg","jpg","jpg","jpeg","jpeg","jpeg","jpeg","jpeg","jpeg"][i]===undefined?"":"."+["jpeg","jpeg","jpeg","jpg","jpg","jpg","jpg","jpeg","jpeg","jpeg","jpeg","jpeg","jpeg"][i]}`,alt:"Producción agrícola de Panama Squash Co. en Panamá"})).filter((_,i)=>i!==3),
...[
  "/calabaza/panama-squash-co-calabaza-producto-01.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-02.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-03.jpg",
  "/calabaza/panama-squash-co-calabaza-producto-04.jpg",
  "/calabaza/panama-squash-co-calabaza-producto-06.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-07.jpeg",
  "/calabaza/panama-squash-co-calabaza-producto-09.jpg"
].map(src=>({src,alt:"Producción y selección de calabaza en Panamá"})),
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
].map(src=>({src,alt:"Cultivo y selección de sandía en Panamá"})),
...Array.from({length:2},(_,i)=>({src:`/piña/panama-squash-co-piña-producto-0${i+4}.jpg`,alt:"Piñas listas para selección y despacho"})),
{src:"/platano/panama-squash-co-platano-producto-04.jpg",alt:"Plátanos seleccionados por Panama Squash Co."},
...Array.from({length:5},(_,i)=>({src:`/papaya/panama-squash-co-papaya-producto-${String(i+4).padStart(2,"0")}.${["jpg","jpeg","jpg","jpg","jpeg"][i]}`,alt:"Papayas seleccionadas por Panama Squash Co."})),
...Array.from({length:2},(_,i)=>({src:`/melon/panama-squash-co-melon-producto-0${i+4}.${["jpeg","jpg"][i]}`,alt:"Melón Golden Honeydew de Panama Squash Co."}))
];
export const posts=[
{slug:"a-quality-first-approach",category:"Producción",date:"28 septiembre 2023",title:"Calidad desde el campo hasta el empaque",excerpt:"Cómo una selección cuidadosa protege cada producto durante su recorrido.",image:gallery[3].src},{slug:"panama-strategic-origin",category:"Exportación",date:"21 septiembre 2023",title:"Panamá: origen estratégico para el comercio agrícola",excerpt:"Condiciones tropicales y una ubicación conectada con mercados globales.",image:gallery[2].src},{slug:"know-your-squash",category:"Productos",date:"14 septiembre 2023",title:"Conoce nuestras variedades de calabaza",excerpt:"Una mirada a las cualidades y formatos disponibles para compradores.",image:products[0].image}];

export const squashGallery=[
{src:"/calabaza/panama-squash-co-calabaza-producto-08.jpg",alt:"Calabazas seleccionadas para su manejo"},
{src:"/calabaza/panama-squash-co-calabaza-producto-10.jpg",alt:"Calabazas recibidas en planta"},
{src:"/calabaza/panama-squash-co-calabaza-producto-05.jpeg",alt:"Selección de calabazas de Panama Squash Co."}
];

export const watermelonGallery=[
{src:"/sandia/panama-squash-co-sandia-producto-01.jpeg",alt:"Cultivo de sandía en Panamá"},
{src:"/sandia/panama-squash-co-sandia-producto-05.jpg",alt:"Sandías cosechadas en el campo"},
{src:"/sandia/panama-squash-co-sandia-producto-06.jpg",alt:"Detalle de sandía seleccionada"}
];

export const pineappleGallery=[
{src:"/piña/panama-squash-co-piña-producto-01.png",alt:"Piña cultivada y seleccionada en Panamá"},
{src:"/piña/panama-squash-co-piña-producto-02.jpg",alt:"Piñas frescas de Panama Squash Co."},
{src:"/piña/panama-squash-co-piña-producto-03.jpg",alt:"Detalle de piña seleccionada por calidad"}
];

export type AdditionalProduct={slug:string;name:string;scientific:string;cover:string;description:string;images:{src:string;alt:string}[]};
export const additionalProducts:AdditionalProduct[]=[
{slug:"platano",name:"Plátano",scientific:"Musa paradisiaca",cover:"/platano/portada_platano.png",description:"Producto agrícola seleccionado con atención a su condición, presentación y manejo para responder a las necesidades de cada mercado.",images:Array.from({length:4},(_,i)=>({src:`/platano/panama-squash-co-platano-producto-${String(i+1).padStart(2,"0")}.jpg`,alt:"Plátanos seleccionados por Panama Squash Co."}))},
{slug:"papaya",name:"Papaya",scientific:"Carica papaya",cover:"/papaya/portada_papaya.jpeg",description:"Fruta tropical manejada bajo criterios de selección y calidad, desde su origen hasta la preparación para comercialización.",images:[{src:"/papaya/panama-squash-co-papaya-producto-01.jpeg",alt:"Papaya de producción panameña"},...Array.from({length:3},(_,i)=>({src:`/papaya/panama-squash-co-papaya-producto-${String(i+2).padStart(2,"0")}.jpg`,alt:"Papayas seleccionadas por Panama Squash Co."}))]},
{slug:"yuca-parafinada",name:"Yuca parafinada",scientific:"Manihot esculenta",cover:"/yuca/portada_yuca.png",description:"Raíces seleccionadas y preparadas para proteger su frescura, presentación y calidad durante el manejo comercial.",images:[{src:"/yuca/panama-squash-co-yuca-producto-01.jpg",alt:"Yuca parafinada seleccionada"},{src:"/yuca/panama-squash-co-yuca-producto-02.jpeg",alt:"Preparación de yuca parafinada"}]},
{slug:"melon-golden-honeydew",name:"Melón Golden Honeydew",scientific:"Cucumis melo",cover:"/melon/portada_melon.png",description:"Melones seleccionados por su uniformidad y presentación, preparados con el cuidado que exige una entrega consistente.",images:[{src:"/melon/panama-squash-co-melon-producto-01.jpg",alt:"Melón Golden Honeydew seleccionado"},{src:"/melon/panama-squash-co-melon-producto-02.jpeg",alt:"Producción de melón Golden Honeydew"},{src:"/melon/panama-squash-co-melon-producto-03.jpg",alt:"Melones preparados para selección"},{src:"/melon/panama-squash-co-melon-producto-04.jpeg",alt:"Detalle de melón Golden Honeydew"}]}
];
export const productCards=[...products.map(product=>({...product,href:`/products/${product.slug}`})),...additionalProducts.map(product=>({slug:product.slug,name:product.name,scientific:product.scientific,image:product.cover,description:product.description,href:`/products/otros#${product.slug}`}))];
