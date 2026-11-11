import { Megaphone, Search, PenTool, Palette, BarChart3, Code2, Video, Target } from "lucide-react";

const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  team: u("photo-1522071820081-009f0129c71c"),
  social: u("photo-1611162617213-7d7a39e9b1d7"),
  analytics: u("photo-1551288049-bebda4e38f71"),
  branding: u("photo-1558655146-9f40138edfeb"),
  studio: u("photo-1497366216548-37526070297c"),
  meeting: u("photo-1600880292203-757bb62b4baf"),
  creative: u("photo-1542744173-8e7e53415bb0"),
  contact: u("photo-1497215842964-222b430dc094"),
};

export const SERVICES = [
  { icon: Megaphone, title: "Social Media Marketing", desc: "Scroll-stopping content and community strategies that turn followers into loyal customers.", points: ["Content calendars", "Community management", "Influencer collaborations", "Platform growth"], img: IMG.social },
  { icon: Target, title: "Performance Marketing", desc: "Data-driven paid campaigns on Meta, Google and beyond, engineered for measurable ROI.", points: ["Meta & Google Ads", "Funnel design", "Retargeting", "A/B testing"], img: IMG.analytics },
  { icon: Search, title: "SEO & Content", desc: "Rank higher, get found faster, and own the conversations your customers are searching for.", points: ["Technical SEO", "Keyword strategy", "Blog & copywriting", "Local SEO"], img: IMG.creative },
  { icon: Palette, title: "Branding & Identity", desc: "Distinctive brand systems — logos, voice, and visual language that people remember.", points: ["Logo design", "Brand guidelines", "Positioning", "Packaging"], img: IMG.branding },
  { icon: Code2, title: "Website Design & Development", desc: "Fast, beautiful, conversion-focused websites that work as hard as your team does.", points: ["UI/UX design", "Landing pages", "E-commerce", "Maintenance"], img: IMG.studio },
  { icon: Video, title: "Video & Creative Production", desc: "Reels, ads and brand films crafted to capture attention in the first second.", points: ["Reels & shorts", "Ad creatives", "Photography", "Motion graphics"], img: IMG.meeting },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Clear dashboards and insights so every rupee you spend has a reason.", points: ["Tracking setup", "Monthly reports", "Competitor analysis", "Growth audits"], img: IMG.analytics },
  { icon: PenTool, title: "Strategy & Consulting", desc: "A roadmap built around your business goals, audience and market opportunity.", points: ["Market research", "Go-to-market plans", "Campaign planning", "Brand audits"], img: IMG.team },
];

export const PROCESS = [
  { step: "Discover", desc: "We dive deep into your brand, audience, competitors and goals." },
  { step: "Strategy", desc: "A tailored roadmap with channels, messaging and measurable KPIs." },
  { step: "Create", desc: "Our creatives craft content, campaigns and experiences that resonate." },
  { step: "Launch", desc: "We go live with precision — tracked, tested and optimised from day one." },
  { step: "Grow", desc: "Continuous optimisation and scaling to push your results beyond limits." },
];

export const TESTIMONIALS = [
  { quote: "ELWOURA completely transformed our online presence. Our engagement tripled within three months.", name: "Ananya Sharma", role: "Founder, Bloom Botanics" },
  { quote: "Their performance campaigns delivered the best ROI we've ever seen. A true growth partner.", name: "Rohan Mehta", role: "CEO, UrbanFit Studios" },
  { quote: "From branding to website, they understood our vision instantly and executed it beautifully.", name: "Priya Kapoor", role: "Director, Kapoor Interiors" },
  { quote: "Creative, responsive and incredibly strategic. ELWOURA feels like an extension of our team.", name: "Arjun Verma", role: "Marketing Head, NovaTech" },
];

export const STATS = [
  { n: 250, s: "+", label: "Projects Delivered" },
  { n: 120, s: "+", label: "Happy Clients" },
  { n: 400, s: "+", label: "Campaigns Launched" },
  { n: 5, s: "+", label: "Years of Experience" },
];

export const KEYWORDS = ["Social Media", "Branding", "SEO", "Performance Ads", "Web Design", "Content", "Video", "Strategy"];
