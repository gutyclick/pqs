import{PageHero}from"@/components/layout/PageHero";
import{GalleryGrid}from"@/components/gallery/GalleryGrid";
import{getGalleryCollections}from"@/lib/content";
import{createPageMetadata}from"@/lib/seo";

export const metadata=createPageMetadata({title:"Agricultural gallery from Panama",description:"Explore Panama Squash Co. fields, fresh produce, harvests, selection and agricultural packing operations in Herrera, Panama.",path:"/gallery",image:"/general/panama-squash-co-galeria-01.jpeg"});
export const revalidate=60;

export default async function GalleryPage(){const collections=await getGalleryCollections();return <><PageHero eyebrow="Our origin" title="Agriculture up close." description="A look at our products, fields and the processes behind every harvest."/><section className="section"><div className="container space-y-24">{collections.map(collection=><section key={collection.id}><div className="mb-10 grid gap-4 border-b border-[var(--line)] pb-7 md:grid-cols-[1fr_.8fr] md:items-end"><h2 className="display text-4xl md:text-6xl">{collection.title}</h2>{collection.description&&<p className="leading-7 text-[var(--muted)]">{collection.description}</p>}</div><GalleryGrid images={collection.images}/></section>)}</div></section></>}
