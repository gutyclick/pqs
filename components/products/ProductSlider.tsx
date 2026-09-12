"use client";

import Image from "next/image";
import {useRef, useState} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

type Slide={src:string;alt:string};

export function ProductSlider({name,cover,images}:{name:string;cover:string;images:Slide[]}){
  const track=useRef<HTMLDivElement>(null);
  const slides=[{src:cover,alt:`Portada de ${name}`},...images].slice(0,4);
  const[index,setIndex]=useState(0);

  function go(next:number){
    const target=Math.max(0,Math.min(slides.length-1,next));
    setIndex(target);
    const node=track.current;
    if(node)node.scrollTo({left:node.clientWidth*target,behavior:"smooth"});
  }

  return <div className="relative overflow-hidden rounded-[30px] bg-[var(--brand-light)]">
    <div ref={track} onScroll={event=>{const width=event.currentTarget.clientWidth;if(width)setIndex(Math.round(event.currentTarget.scrollLeft/width))}} className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {slides.map((slide,i)=><div key={slide.src} className="relative aspect-[5/4] min-w-full snap-center md:aspect-[4/3]">
        <Image src={slide.src} alt={slide.alt} fill priority={i===0} sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/>
      </div>)}
    </div>
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#082d22]/80 to-transparent p-5 pt-16 text-white">
      <span className="eyebrow">{String(index+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}</span>
      <div className="flex gap-2">
        <button type="button" aria-label={`Previous image of ${name}`} disabled={index===0} onClick={()=>go(index-1)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-[var(--brand-dark)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft size={18}/></button>
        <button type="button" aria-label={`Siguiente imagen de ${name}`} disabled={index===slides.length-1} onClick={()=>go(index+1)} className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand-accent)] text-[var(--brand-dark)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"><ArrowRight size={18}/></button>
      </div>
    </div>
  </div>;
}
