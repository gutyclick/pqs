import type { Metadata } from "next";
import { Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const body = Archivo({subsets:["latin"],variable:"--font-body"});
const display = Archivo_Black({weight:"400",subsets:["latin"],variable:"--font-display"});
const mono = IBM_Plex_Mono({weight:["500","600"],subsets:["latin"],variable:"--font-mono"});

export const metadata: Metadata = {
 metadataBase:new URL(site.url), title:{default:"Panama Squash Co. | Agricultural Production & Export",template:"%s | Panama Squash Co."},
 description:"Premium agricultural products grown, packed and prepared for export from Panama.",
 alternates:{canonical:"/"}, openGraph:{type:"website",locale:"en_US",siteName:site.name,title:"Panama Squash Co.",description:"From Panama to the world. Quality agricultural production and export.",images:[{url:"/opengraph-image",width:1200,height:630}]},
 twitter:{card:"summary_large_image",title:"Panama Squash Co.",description:"Premium agricultural products from Panama."},
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${body.variable} ${display.variable} ${mono.variable}`}><Navbar/><main>{children}</main><Footer/><a href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact Panama Squash Co. on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#245c45] text-white shadow-lg transition hover:-translate-y-1"><MessageCircle size={21}/></a></body></html>}
