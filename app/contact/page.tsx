import{Mail,MapPin,Phone}from"lucide-react";
import{PageHero}from"@/components/layout/PageHero";
import{ContactForm}from"@/components/contact/ContactForm";
import{site}from"@/data/site";
import{createPageMetadata}from"@/lib/seo";

export const metadata=createPageMetadata({title:"Contact our agricultural export team",description:"Contact Panama Squash Co. in Herrera, Panama about fresh produce availability, packing formats, volumes and agricultural supply.",path:"/contact"});

export default function Contact(){return <><PageHero eyebrow="Contact" title="Let's talk about your market." description="Tell us which product and format you need. Our team will review your inquiry and get in touch."/><section className="section"><div className="container grid gap-16 lg:grid-cols-[.7fr_1.3fr]"><aside><p className="eyebrow text-[var(--brand-primary)]">Direct contact</p><div className="mt-8 space-y-6 text-sm leading-7"><p className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[var(--brand-primary)]" size={19}/>{site.address}</p><p className="flex gap-4"><Phone className="mt-1 shrink-0 text-[var(--brand-primary)]" size={19}/><a href="tel:+50767823739">{site.phone}</a></p><p className="flex gap-4"><Mail className="mt-1 shrink-0 text-[var(--brand-primary)]" size={19}/><a href={`mailto:${site.email}`}>{site.email}</a></p></div><div className="mt-10 border-t border-[var(--line)] pt-8"><p className="eyebrow text-[#6d776f]">Hours</p><p className="mt-4 text-sm leading-7">Monday to Friday · 8:00 AM – 7:00 PM<br/>Saturday · 8:00 AM – 2:00 PM<br/>Sunday · Closed</p></div></aside><div><ContactForm/></div></div></section></>}
