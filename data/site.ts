export const site={name:"Panama Squash Co.",url:process.env.NEXT_PUBLIC_SITE_URL||"https://panamasquash.com",email:"info@panamasquash.com",phone:"+507 6782-3739",whatsapp:"https://wa.me/50767823739?text=Hola%20Panama%20Squash%20Co.%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos.",address:"Calle del Estudiante, Pesé, Herrera, Panamá"};
export type Product={slug:string;name:string;scientific:string;image:string;description:string;features:string[]};
export const products:Product[]=[
{slug:"squash",name:"Calabaza",scientific:"Cucurbita maxima",image:"/calabaza/panama-squash-co-calabaza-9.jpg",description:"Variedades seleccionadas por su excelente textura y sabor, preparadas para mercados nacionales e internacionales.",features:["Arjuna F1, Leela 104 F1, Butternut y Musquée de Provence","Sacos de exportación de 14 kg","Aprox. 1,500 sacos / 21,000 kg por contenedor"]},
{slug:"watermelon",name:"Sandía Quetzali",scientific:"Citrullus lanatus",image:"/sandia/panama-squash-co-sandia-1.jpeg",description:"Una variedad con semilla reconocida por su color intenso y su sabor fresco y definido.",features:["Excelente sabor y color","Variedad con semilla","Tamaños 3, 4, 5, 6 y 7 por caja"]},
{slug:"pineapple",name:"Piña",scientific:"Ananas comosus",image:"/piña/panama-squash-co-piña-1.png",description:"Fruta naturalmente dulce, seleccionada por su color, textura y presentación consistente.",features:["Dulzura natural","Excelente sabor, color y textura","Múltiples tamaños disponibles"]}];
export const gallery=[
{src:"/general/panama-squash-co-general-4.jpeg",alt:"Trabajo agrícola de Panama Squash Co. en Herrera"},{src:"/general/panama-squash-co-general-12.jpeg",alt:"Productos agrícolas seleccionados en Panamá"},{src:"/general/panama-squash-co-general-1.jpeg",alt:"Operación de Panama Squash Co. en Pesé"},{src:"/general/panama-squash-co-general-18.jpg",alt:"Preparación de productos agrícolas para su distribución"},{src:"/general/panama-squash-co-general-7.jpeg",alt:"Equipo de trabajo de Panama Squash Co."},{src:"/general/panama-squash-co-general-21.jpg",alt:"Producción agrícola panameña de calidad"},{src:"/general/panama-squash-co-general-3.jpeg",alt:"Labores agrícolas en la provincia de Herrera"},{src:"/general/panama-squash-co-general-15.jpeg",alt:"Selección y manejo de productos frescos"},{src:"/general/panama-squash-co-general-9.jpeg",alt:"Campo y producción de Panama Squash Co."},{src:"/general/panama-squash-co-general-24.jpg",alt:"Productos preparados para mercados nacionales e internacionales"},{src:"/general/panama-squash-co-general-2.jpeg",alt:"Jornada de producción agrícola en Panamá"},{src:"/general/panama-squash-co-general-14.jpeg",alt:"Detalle del trabajo agrícola de Panama Squash Co."},{src:"/general/panama-squash-co-general-6.jpeg",alt:"Cosecha producida en tierras panameñas"},{src:"/general/panama-squash-co-general-20.jpg",alt:"Manejo cuidadoso de productos agrícolas"},{src:"/general/panama-squash-co-general-11.jpg",alt:"Actividad productiva de Panama Squash Co."},{src:"/general/panama-squash-co-general-25.jpg",alt:"Calidad agrícola desde el origen"},{src:"/general/panama-squash-co-general-5.jpeg",alt:"Producción responsable en Herrera, Panamá"},{src:"/general/panama-squash-co-general-17.jpg",alt:"Productos frescos durante el proceso de selección"},{src:"/general/panama-squash-co-general-8.jpeg",alt:"Trabajo en campo de Panama Squash Co."},{src:"/general/panama-squash-co-general-23.jpg",alt:"Preparación de la cosecha para su comercialización"},{src:"/general/panama-squash-co-general-10.jpg",alt:"Operación agrícola familiar en Pesé"},{src:"/general/panama-squash-co-general-16.jpeg",alt:"Selección de productos cultivados en Panamá"},{src:"/general/panama-squash-co-general-13.jpeg",alt:"Cosecha y producción agrícola panameña"},{src:"/general/panama-squash-co-general-22.jpg",alt:"Productos de Panama Squash Co. listos para despacho"},{src:"/general/panama-squash-co-general-19.jpg",alt:"El campo detrás de cada producto"}];
export const posts=[
{slug:"a-quality-first-approach",category:"Producción",date:"28 septiembre 2023",title:"Calidad desde el campo hasta el empaque",excerpt:"Cómo una selección cuidadosa protege cada producto durante su recorrido.",image:gallery[3].src},{slug:"panama-strategic-origin",category:"Exportación",date:"21 septiembre 2023",title:"Panamá: origen estratégico para el comercio agrícola",excerpt:"Condiciones tropicales y una ubicación conectada con mercados globales.",image:gallery[2].src},{slug:"know-your-squash",category:"Productos",date:"14 septiembre 2023",title:"Conoce nuestras variedades de calabaza",excerpt:"Una mirada a las cualidades y formatos disponibles para compradores.",image:products[0].image}];

export const squashGallery=[
{src:"/calabaza/panama-squash-co-calabaza-1.jpeg",alt:"Calabazas empacadas en sacos para su manejo"},
{src:"/calabaza/panama-squash-co-calabaza-2.jpeg",alt:"Vista general de la planta de selección de calabazas"},
{src:"/calabaza/panama-squash-co-calabaza-3.jpeg",alt:"Calabazas recibidas en la planta de Panama Squash"},
{src:"/calabaza/panama-squash-co-calabaza-4.jpeg",alt:"Calabazas agrupadas para empaque"},
{src:"/calabaza/panama-squash-co-calabaza-5.jpeg",alt:"Calabaza butternut empacada y etiquetada"},
{src:"/calabaza/panama-squash-co-calabaza-6.jpeg",alt:"Cosecha de calabaza butternut en el campo"},
{src:"/calabaza/panama-squash-co-calabaza-7.jpg",alt:"Calabazas butternut seleccionadas en planta"},
{src:"/calabaza/panama-squash-co-calabaza-8.jpg",alt:"Detalle de calabazas butternut listas para selección"},
{src:"/calabaza/panama-squash-co-calabaza-10.jpg",alt:"Sacos de calabaza almacenados para despacho"},
{src:"/calabaza/panama-squash-co-calabaza-11.jpg",alt:"Calabazas seleccionadas durante el proceso de producción"}
];

export const watermelonGallery=[
{src:"/sandia/panama-squash-co-sandia-2.jpeg",alt:"Cultivo de sandía Quetzali en Panamá"},
{src:"/sandia/panama-squash-co-sandia-3.jpg",alt:"Sandías Quetzali cosechadas en el campo"},
{src:"/sandia/panama-squash-co-sandia-4.jpeg",alt:"Detalle de sandía Quetzali lista para cosecha"},
{src:"/sandia/panama-squash-co-sandia-5.jpeg",alt:"Planta de sandía en producción"},
{src:"/sandia/panama-squash-co-sandia-6.jpeg",alt:"Cosecha de sandías seleccionadas"},
{src:"/sandia/panama-squash-co-sandia-7.jpeg",alt:"Sandías Quetzali preparadas para su manejo"},
{src:"/sandia/panama-squash-co-sandia-8.jpg",alt:"Selección de sandías por calidad"},
{src:"/sandia/panama-squash-co-sandia-9.jpg",alt:"Sandías frescas de producción panameña"},
{src:"/sandia/panama-squash-co-sandia-10.jpg",alt:"Detalle de la producción de sandía Quetzali"},
{src:"/sandia/panama-squash-co-sandia-11.jpg",alt:"Sandías listas para su preparación y despacho"},
{src:"/sandia/panama-squash-co-sandia-12.png",alt:"Producción de sandía Quetzali de Panama Squash"},
{src:"/sandia/panama-squash-co-sandia-13.jpg",alt:"Detalle de sandía Quetzali seleccionada"},
{src:"/sandia/panama-squash-co-sandia-14.jpg",alt:"Sandías Quetzali preparadas después de la cosecha"}
];

export const pineappleGallery=[
{src:"/piña/panama-squash-co-piña-2.jpg",alt:"Piñas frescas cultivadas en Panamá"},
{src:"/piña/panama-squash-co-piña-3.jpg",alt:"Detalle de piña seleccionada por calidad"},
{src:"/piña/panama-squash-co-piña-4.jpg",alt:"Producción de piña de Panama Squash"},
{src:"/piña/panama-squash-co-piña-5.jpg",alt:"Piñas listas para su preparación y despacho"}
];
