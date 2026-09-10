export const site={name:"Panama Squash Co.",url:process.env.NEXT_PUBLIC_SITE_URL||"https://panamasquash.com",email:"info@panamasquash.com",phone:"+507 6782-3739",whatsapp:"https://wa.me/50767823739?text=Hola%20Panama%20Squash%20Co.%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos.",address:"Calle del Estudiante, Pesé, Herrera, Panamá"};
export type Product={slug:string;name:string;scientific:string;image:string;description:string;features:string[]};
export const products:Product[]=[
{slug:"squash",name:"Calabaza",scientific:"Cucurbita maxima",image:"/calabaza/9.jpg",description:"Variedades seleccionadas por su excelente textura y sabor, preparadas para mercados nacionales e internacionales.",features:["Arjuna F1, Leela 104 F1, Butternut y Musquée de Provence","Sacos de exportación de 14 kg","Aprox. 1,500 sacos / 21,000 kg por contenedor"]},
{slug:"watermelon",name:"Sandía Quetzali",scientific:"Citrullus lanatus",image:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0129-1030x773.jpg",description:"Una variedad con semilla reconocida por su color intenso y su sabor fresco y definido.",features:["Excelente sabor y color","Variedad con semilla","Tamaños 3, 4, 5, 6 y 7 por caja"]},
{slug:"pineapple",name:"Piña",scientific:"Ananas comosus",image:"https://panamasquash.com/wp-content/uploads/2023/09/IMG_8482-1-1030x773.jpg",description:"Fruta naturalmente dulce, seleccionada por su color, textura y presentación consistente.",features:["Dulzura natural","Excelente sabor, color y textura","Múltiples tamaños disponibles"]}];
export const gallery=[
{src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0142-773x1030.jpg",alt:"Productos agrícolas frescos de Panamá"},{src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0129-1030x773.jpg",alt:"Sandías seleccionadas para empaque"},{src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG_20230303_172330-1030x773.jpg",alt:"Campo de producción agrícola en Panamá"},{src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG-20230928-WA0138-1030x773.jpg",alt:"Cosecha preparada para selección de calidad"},{src:"https://panamasquash.com/wp-content/uploads/2023/09/IMG_8482-1-1030x773.jpg",alt:"Producción de piña fresca"}];
export const posts=[
{slug:"a-quality-first-approach",category:"Producción",date:"28 septiembre 2023",title:"Calidad desde el campo hasta el empaque",excerpt:"Cómo una selección cuidadosa protege cada producto durante su recorrido.",image:gallery[3].src},{slug:"panama-strategic-origin",category:"Exportación",date:"21 septiembre 2023",title:"Panamá: origen estratégico para el comercio agrícola",excerpt:"Condiciones tropicales y una ubicación conectada con mercados globales.",image:gallery[2].src},{slug:"know-your-squash",category:"Productos",date:"14 septiembre 2023",title:"Conoce nuestras variedades de calabaza",excerpt:"Una mirada a las cualidades y formatos disponibles para compradores.",image:products[0].image}];

export const squashGallery=[
{src:"/calabaza/1.jpeg",alt:"Calabazas empacadas en sacos para su manejo"},
{src:"/calabaza/2.jpeg",alt:"Vista general de la planta de selección de calabazas"},
{src:"/calabaza/3.jpeg",alt:"Calabazas recibidas en la planta de Panama Squash"},
{src:"/calabaza/4.jpeg",alt:"Calabazas agrupadas para empaque"},
{src:"/calabaza/5.jpeg",alt:"Calabaza butternut empacada y etiquetada"},
{src:"/calabaza/6.jpeg",alt:"Cosecha de calabaza butternut en el campo"},
{src:"/calabaza/7.jpg",alt:"Calabazas butternut seleccionadas en planta"},
{src:"/calabaza/8.jpg",alt:"Detalle de calabazas butternut listas para selección"},
{src:"/calabaza/10.jpg",alt:"Sacos de calabaza almacenados para despacho"}
];
