import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { IMG, SERVICES } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ELWOURA" },
      { name: "description", content: "Get a free consultation with ELWOURA. Call, email or WhatsApp us to start growing your brand." },
      { property: "og:title", content: "Contact ELWOURA — Free Consultation" },
      { property: "og:description", content: "Tell us about your brand and goals. Let's grow beyond limits together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full border-b border-ink/20 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-ink/40 focus:border-teal";

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi ELWOURA, I'd like a free consultation.\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\nService: ${f.get("service")}\nMessage: ${f.get("message")}`;
    window.open(`https://wa.me/918107035735?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };
  return (<>
    <PageHero eyebrow="Contact us" title="Let's build something remarkable." sub="Tell us about your brand and goals — your first consultation is completely free." img={IMG.contact} />
    <section className="section-light py-28 md:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <Reveal className="space-y-6 lg:col-span-4">
          {[{ i: Phone, t: "Call us", v: "+91 81070 35735", h: "tel:+918107035735" },
            { i: MessageCircle, t: "WhatsApp", v: "Chat with us instantly", h: "https://wa.me/918107035735" },
            { i: Mail, t: "Email", v: "hello@elwoura.com", h: "mailto:hello@elwoura.com" },
            { i: MapPin, t: "Location", v: "India — serving clients worldwide", h: undefined }].map((c) => (
            <a key={c.t} href={c.h} target={c.h?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="group flex items-start gap-5 rounded-2xl bg-alabaster p-6 transition-colors duration-300 hover:bg-teal hover:text-paper">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper text-teal"><c.i className="h-5 w-5" /></div>
              <div><p className="eyebrow opacity-60">{c.t}</p><p className="mt-1 font-display text-lg font-medium">{c.v}</p></div>
            </a>
          ))}
        </Reveal>
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="section-teal flex h-full flex-col items-center justify-center rounded-3xl p-16 text-center">
                <CheckCircle2 className="h-16 w-16" />
                <h2 className="mt-6 text-4xl font-bold">Thank you!</h2>
                <p className="mt-3 max-w-md text-paper/75">Your message is ready in WhatsApp — hit send and our team will get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="mt-8 underline underline-offset-4">Send another message</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} className="grid gap-8 md:grid-cols-2">
                <h2 className="text-4xl font-bold md:col-span-2 md:text-5xl">Get a Free Consultation</h2>
                <input required name="name" placeholder="Your name" className={field} />
                <input required type="email" name="email" placeholder="Email address" className={field} />
                <input name="phone" placeholder="Phone number" className={field} />
                <select name="service" className={field} defaultValue="">
                  <option value="" disabled>Service you're interested in</option>
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea required name="message" rows={4} placeholder="Tell us about your project" className={`${field} md:col-span-2`} />
                <div className="md:col-span-2">
                  <Magnetic>
                    <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-teal px-10 py-5 font-display font-medium text-paper transition-colors hover:bg-ink">
                      Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Magnetic>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  </>);
}
