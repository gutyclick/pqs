"use client";
import Script from"next/script";
import{useEffect,useRef,useState}from"react";
import{ArrowRight,CheckCircle2,ShieldCheck}from"lucide-react";

const fields=[{name:"name",label:"Name",required:true,type:"text",auto:"name",maxLength:120},{name:"company",label:"Company",required:false,type:"text",auto:"organization",maxLength:160},{name:"country",label:"Country",required:true,type:"text",auto:"country-name",maxLength:100},{name:"email",label:"Email address",required:true,type:"email",auto:"email",maxLength:200},{name:"phone",label:"Phone",required:false,type:"tel",auto:"tel",maxLength:60}];
export function ContactForm({turnstileSiteKey}:{turnstileSiteKey?:string}){
  const[state,setState]=useState<"idle"|"loading"|"success"|"error">("idle");
  const[error,setError]=useState("");
  const startedAt=useRef(0);
  useEffect(()=>{startedAt.current=Date.now()},[]);
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();setState("loading");setError("");
    const form=event.currentTarget;const data=Object.fromEntries(new FormData(form));
    const response=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...data,startedAt:startedAt.current,turnstileToken:data["cf-turnstile-response"]||""})});
    const result=await response.json().catch(()=>({error:"No pudimos enviar tu mensaje."}));
    if(response.ok){setState("success");return}
    setError(result.error||"No pudimos enviar tu mensaje. Inténtalo nuevamente.");setState("error");
    if(turnstileSiteKey&&(window as typeof window&{turnstile?:{reset:()=>void}}).turnstile)(window as typeof window&{turnstile:{reset:()=>void}}).turnstile.reset();
  }
  if(state==="success")return <div className="rounded-[28px] bg-[var(--brand-light)] p-10"><CheckCircle2 className="text-[var(--brand-primary)]"/><h2 className="mt-5 text-3xl font-semibold">Inquiry received.</h2><p className="mt-3 text-[var(--muted)]">Our team will review your message and get in touch.</p></div>;
  return <>
    {turnstileSiteKey&&<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/>}
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off"/></label></div>
      {fields.map(field=><label key={field.name} className="text-sm font-semibold">{field.label}<input required={field.required} name={field.name} type={field.type} autoComplete={field.auto} maxLength={field.maxLength} className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-4 font-normal outline-none"/></label>)}
      <label className="text-sm font-semibold">Product of interest<select required name="product" className="mt-2 min-h-[58px] w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-4 font-normal"><option value="">Select a product</option><option value="squash">Squash</option><option value="watermelon">Watermelon</option><option value="pineapple">Pineapple</option><option value="platano">Plantain</option><option value="papaya">Papaya</option><option value="yuca-parafinada">Waxed cassava</option><option value="melon-golden-honeydew">Golden Honeydew Melon</option><option value="other">Other</option></select></label>
      <label className="text-sm font-semibold sm:col-span-2">Message<textarea required name="message" minLength={10} maxLength={3000} rows={6} className="mt-2 w-full resize-y rounded-2xl border border-[var(--line)] bg-white px-4 py-4 font-normal outline-none"/></label>
      {turnstileSiteKey&&<div className="sm:col-span-2"><div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" data-language="auto"/></div>}
      <div className="sm:col-span-2"><button disabled={state==="loading"} className="button button-primary">{state==="loading"?"Sending…":"Send inquiry"}<ArrowRight size={16}/></button>{state==="error"&&<p className="mt-4 text-sm text-red-700" role="alert">{error}</p>}<p className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)]"><ShieldCheck size={14}/>Protected against automated submissions.</p></div>
    </form>
  </>;
}
