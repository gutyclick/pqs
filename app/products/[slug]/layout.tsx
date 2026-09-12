import{JsonLd}from"@/components/seo/JsonLd";
import{products,site}from"@/data/site";
import{absoluteUrl,breadcrumbSchema,productSeo}from"@/lib/seo";

export default async function ProductLayout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const{slug}=await params;const product=products.find(item=>item.slug===slug);const seo=productSeo[slug];if(!product||!seo)return children;const schema={"@context":"https://schema.org","@type":"WebPage","@id":`${site.url}/products/${slug}#webpage`,url:absoluteUrl(`/products/${slug}`),name:seo.name,description:seo.description,isPartOf:{"@id":`${site.url}/#website`},primaryImageOfPage:{"@type":"ImageObject",contentUrl:absoluteUrl(product.image)},about:{"@type":"Thing",name:seo.name}};return <><JsonLd data={[schema,breadcrumbSchema([{name:"Home",path:"/"},{name:"Products",path:"/products"},{name:seo.name,path:`/products/${slug}`}])]}/>{children}</>}
