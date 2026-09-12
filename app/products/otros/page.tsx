import Link from"next/link";
import{ArrowRight,PackageCheck,ShieldCheck,Sprout}from"lucide-react";
import{PageHero}from"@/components/layout/PageHero";
import{ProductSlider}from"@/components/products/ProductSlider";
import{Reveal}from"@/components/ui/Reveal";
import{additionalProducts}from"@/data/site";
import{createPageMetadata}from"@/lib/seo";

export const metadata=createPageMetadata({title:"Plantain, papaya, waxed cassava and melon",description:"Discover plantain, papaya, waxed cassava and Golden Honeydew melon selected and prepared in Panama for international markets.",path:"/products/otros",image:"/melon/portada_melon.png"});

const standards=[
  {icon:Sprout,title:"Careful origin",text:"We work close to the field to care for every product from its origin."},
  {icon:ShieldCheck,title:"Consistent selection",text:"We review condition and presentation according to each market's needs."},
  {icon:PackageCheck,title:"Responsible handling",text:"We prepare each product to preserve its quality throughout the commercial process."}
];

export default function AdditionalProductsPage(){return <>
  <PageHero eyebrow="More products from Panama" title="Diversity from the field. One commitment to quality." description="Plantain, papaya, waxed cassava and Golden Honeydew melon selected with the care that defines our work."/>
  <section className="border-b border-[var(--line)] py-10"><div className="container grid gap-6 md:grid-cols-3">{standards.map(({icon:Icon,title,text})=><div key={title} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--brand-light)] text-[var(--brand-primary)]"><Icon size={19}/></span><div><h2 className="font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p></div></div>)}</div></section>
  <section className="section"><div className="container space-y-24">{additionalProducts.map((product,i)=><article id={product.slug} key={product.slug} className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <Reveal className={i%2?"lg:order-2":""}><ProductSlider name={product.name} cover={product.cover} images={product.images.slice(0,4)}/></Reveal>
    <Reveal delay={.08} className={i%2?"lg:order-1":""}><p className="eyebrow text-[var(--brand-primary)]">{product.scientific}</p><h2 className="display mt-5 text-5xl md:text-7xl">{product.name}</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">{product.description}</p><div className="mt-8 border-l-2 border-[var(--brand-accent)] pl-5"><p className="font-semibold">Quality prepared for every destination</p><p className="mt-2 max-w-lg text-sm leading-6 text-[var(--muted)]">We handle each inquiry according to availability, destination and buyer requirements.</p></div><Link href={`/contact?product=${product.slug}`} className="button button-dark mt-9">Check availability <ArrowRight size={16}/></Link></Reveal>
  </article>)}</div></section>
</>}
