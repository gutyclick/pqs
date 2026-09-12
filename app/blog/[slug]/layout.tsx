import{JsonLd}from"@/components/seo/JsonLd";
import{site}from"@/data/site";
import{getPost}from"@/lib/content";
import{absoluteUrl,breadcrumbSchema}from"@/lib/seo";

export default async function ArticleLayout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const{slug}=await params;const post=await getPost(slug);if(!post)return children;const schema={"@context":"https://schema.org","@type":"BlogPosting","@id":`${site.url}/blog/${slug}#article`,mainEntityOfPage:absoluteUrl(`/blog/${slug}`),headline:post.title,description:post.excerpt,image:absoluteUrl(post.cover_image),datePublished:post.published_at,dateModified:post.published_at,author:{"@id":`${site.url}/#organization`},publisher:{"@id":`${site.url}/#organization`}};return <><JsonLd data={[schema,breadcrumbSchema([{name:"Home",path:"/"},{name:"News",path:"/blog"},{name:post.title,path:`/blog/${slug}`}])]}/>{children}</>}
