import type{Metadata}from"next";
import{site}from"@/data/site";

export function absoluteUrl(path="/"){return new URL(path,site.url).toString()}
export const productSeo:Record<string,{name:string;description:string}>={
  squash:{name:"Squash",description:"Panamanian squash varieties selected for texture, flavor and consistent quality, available for domestic and international agricultural markets."},
  watermelon:{name:"Watermelon",description:"Seeded and seedless watermelon grown in Panama, carefully selected in export sizes and packing formats for international buyers."},
  pineapple:{name:"Pineapple",description:"Naturally sweet pineapple grown in Panama and selected for consistent color, texture, flavor and presentation in sizes 6 through 10."}
};

export function createPageMetadata({title,description,path,image="/opengraph-image"}:{title:string;description:string;path:string;image?:string}):Metadata{return{
  title,description,
  alternates:{canonical:path},
  openGraph:{type:"website",url:path,title,description,siteName:site.name,locale:"en_US",images:[{url:image,alt:`${title} | ${site.name}`}]},
  twitter:{card:"summary_large_image",title,description,images:[image]}
}}

export const organizationSchema={
  "@context":"https://schema.org","@type":"Organization","@id":`${site.url}/#organization`,name:site.name,alternateName:"Panama Squash Co",url:site.url,
  logo:{"@type":"ImageObject",url:absoluteUrl("/icon.png"),contentUrl:absoluteUrl("/icon.png"),width:512,height:512},
  image:absoluteUrl("/opengraph-image"),email:site.email,telephone:site.phone,foundingDate:"2006-02-22",
  address:{"@type":"PostalAddress",streetAddress:"Calle El Estudiante, El Barrero",addressLocality:"Pesé",addressRegion:"Herrera",addressCountry:"PA"},
  areaServed:"Worldwide",knowsAbout:["Agricultural production","Agricultural exports","Fresh produce","Produce packing"]
};

export const websiteSchema={"@context":"https://schema.org","@type":"WebSite","@id":`${site.url}/#website`,url:site.url,name:site.name,publisher:{"@id":`${site.url}/#organization`},inLanguage:["en","es"]};

export function breadcrumbSchema(items:{name:string;path:string}[]){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.name,item:absoluteUrl(item.path)}))}}
