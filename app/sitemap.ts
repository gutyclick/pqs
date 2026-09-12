import type{MetadataRoute}from"next";
import{additionalProducts,gallery,pineappleGallery,products,site,squashGallery,watermelonGallery}from"@/data/site";
import{getPublishedPosts}from"@/lib/content";

const url=(path:string)=>new URL(path,site.url).toString();
const images=(paths:string[])=>paths.map(url);

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
  const posts=await getPublishedPosts();
  const updated="2026-09-11";
  const staticPages:MetadataRoute.Sitemap=[
    {url:url("/"),lastModified:updated,changeFrequency:"weekly",priority:1,images:images(["/opengraph-image"])},
    {url:url("/about"),lastModified:updated,changeFrequency:"monthly",priority:.8,images:images(["/general/panama-squash-co-galeria-10.jpeg","/general/panama-squash-co-galeria-11.jpeg"])},
    {url:url("/products"),lastModified:updated,changeFrequency:"weekly",priority:.9,images:images(products.map(product=>product.image).concat(additionalProducts.map(product=>product.cover)))},
    {url:url("/products/otros"),lastModified:updated,changeFrequency:"weekly",priority:.8,images:images(additionalProducts.flatMap(product=>[product.cover,...product.images.map(image=>image.src)]))},
    {url:url("/gallery"),lastModified:updated,changeFrequency:"weekly",priority:.7,images:images(gallery.map(image=>image.src))},
    {url:url("/blog"),lastModified:posts[0]?.published_at||updated,changeFrequency:"weekly",priority:.7},
    {url:url("/contact"),lastModified:updated,changeFrequency:"yearly",priority:.7}
  ];
  const productImages:Record<string,string[]>={squash:squashGallery.map(image=>image.src),watermelon:watermelonGallery.map(image=>image.src),pineapple:pineappleGallery.map(image=>image.src)};
  const productPages:MetadataRoute.Sitemap=products.map(product=>({url:url(`/products/${product.slug}`),lastModified:updated,changeFrequency:"monthly" as const,priority:.8,images:images([product.image,...(productImages[product.slug]||[])])}));
  const postPages:MetadataRoute.Sitemap=posts.map(post=>({url:url(`/blog/${post.slug}`),lastModified:post.published_at,changeFrequency:"monthly" as const,priority:.65,images:post.cover_image?[url(post.cover_image)]:undefined}));
  return[...staticPages,...productPages,...postPages];
}
