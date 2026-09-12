import type{Metadata}from"next";
import Link from"next/link";
import{ArrowRight,PackageCheck,ShieldCheck,Sprout}from"lucide-react";
import{PageHero}from"@/components/layout/PageHero";
import{ProductSlider}from"@/components/products/ProductSlider";
import{Reveal}from"@/components/ui/Reveal";
import{additionalProducts}from"@/data/site";

export const metadata:Metadata={title:"Plátano, papaya, yuca y melón",description:"Conoce nuestra oferta de plátano, papaya, yuca parafinada y melón Golden Honeydew producidos en Panamá.",alternates:{canonical:"/products/otros"}};

const standards=[
  {icon:Sprout,title:"Origen cuidado",text:"Trabajamos cerca del campo para cuidar el producto desde su origen."},
  {icon:ShieldCheck,title:"Selección consistente",text:"Revisamos condición y presentación según las necesidades de cada mercado."},
  {icon:PackageCheck,title:"Manejo responsable",text:"Preparamos cada producto para conservar su calidad durante el proceso comercial."}
];

export default function AdditionalProductsPage(){return <>
  <PageHero eyebrow="Más productos de Panamá" title="Diversidad del campo. Un mismo compromiso con la calidad." description="Plátano, papaya, yuca parafinada y melón Golden Honeydew seleccionados con el cuidado que distingue nuestro trabajo."/>
  <section className="border-b border-[var(--line)] py-10"><div className="container grid gap-6 md:grid-cols-3">{standards.map(({icon:Icon,title,text})=><div key={title} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--brand-light)] text-[var(--brand-primary)]"><Icon size={19}/></span><div><h2 className="font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p></div></div>)}</div></section>
  <section className="section"><div className="container space-y-24">{additionalProducts.map((product,i)=><article id={product.slug} key={product.slug} className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <Reveal className={i%2?"lg:order-2":""}><ProductSlider name={product.name} cover={product.cover} images={product.images.slice(0,4)}/></Reveal>
    <Reveal delay={.08} className={i%2?"lg:order-1":""}><p className="eyebrow text-[var(--brand-primary)]">{product.scientific}</p><h2 className="display mt-5 text-5xl md:text-7xl">{product.name}</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">{product.description}</p><div className="mt-8 border-l-2 border-[var(--brand-accent)] pl-5"><p className="font-semibold">Calidad preparada para cada destino</p><p className="mt-2 max-w-lg text-sm leading-6 text-[var(--muted)]">Atendemos cada solicitud de acuerdo con disponibilidad, destino y requerimientos del comprador.</p></div><Link href={`/contact?product=${product.slug}`} className="button button-dark mt-9">Consultar disponibilidad <ArrowRight size={16}/></Link></Reveal>
  </article>)}</div></section>
</>}
