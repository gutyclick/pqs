"use client";

import Image from "next/image";
import {useEffect,useRef} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";

type GalleryImage={src:string;alt:string};

export function HomeGallerySlider({images}:{images:GalleryImage[]}){
  const track=useRef<HTMLDivElement>(null);

  function move(direction:1|-1){
    const node=track.current;
    if(!node)return;
    const card=node.firstElementChild as HTMLElement|null;
    const distance=(card?.offsetWidth??node.clientWidth*.8)+16;
    node.scrollBy({left:direction*distance,behavior:"smooth"});
  }

  useEffect(()=>{
    const timer=window.setInterval(()=>{
      const node=track.current;
      if(!node)return;
      const nearEnd=node.scrollLeft+node.clientWidth>=node.scrollWidth-24;
      if(nearEnd)node.scrollTo({left:0,behavior:"smooth"});else move(1);
    },4800);
    return()=>window.clearInterval(timer);
  },[]);

  return <div className="relative mt-12">
    <div ref={track} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {images.map((image,index)=><figure key={image.src} className="group relative aspect-[4/3] min-w-[84%] snap-start overflow-hidden rounded-[26px] bg-[var(--brand-light)] sm:min-w-[58%] lg:min-w-[36%] xl:min-w-[31%]">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width:640px) 84vw,(max-width:1024px) 58vw,36vw" className="object-cover transition duration-700 group-hover:scale-105"/>
        <span className="absolute bottom-4 left-4 rounded-full bg-[var(--brand-dark)]/85 px-3 py-2 font-mono text-[10px] font-bold tracking-[.18em] text-white">{String(index+1).padStart(2,"0")}</span>
      </figure>)}
    </div>
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm text-[var(--muted)]">Desliza para recorrer el campo, la selección y el empaque.</p>
      <div className="flex shrink-0 gap-2 pl-4">
        <button type="button" onClick={()=>move(-1)} aria-label="Ver imágenes anteriores" className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--brand-dark)] transition hover:-translate-x-0.5 hover:bg-[var(--brand-light)]"><ArrowLeft size={18}/></button>
        <button type="button" onClick={()=>move(1)} aria-label="Ver más imágenes" className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-dark)] text-white transition hover:translate-x-0.5"><ArrowRight size={18}/></button>
      </div>
    </div>
  </div>;
}
