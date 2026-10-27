import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';

export const metadata: Metadata = {
  title: 'About CareNova Lab | Beauty R&D and OEM/ODM Partner',
  description: 'Learn about CareNova Lab, our beauty R&D approach, manufacturing coordination, quality and compliance process, and global partnerships.'
};

const audiences = [
  ['Beauty Startups', 'Turn an early product idea into a clear brief, sample plan and practical route to launch.'],
  ['Growing Brands', 'Develop new categories, packaging directions and product ranges around changing market needs.'],
  ['OEM/ODM Projects', 'Coordinate formulas, packaging, production and documentation for project-specific requirements.']
];

const capabilities = [
  ['Product Development', 'Shape a brief around the target customer, formula direction, format and sampling priorities.'],
  ['Packaging & Production', 'Bring packaging, filling and matched manufacturing decisions together around the project requirement.'],
  ['Launch Preparation', 'Organize the information and practical details needed to carry a product from sample to market.']
];

export default function AboutPage() {
  const aboutVideoUrl = process.env.NEXT_PUBLIC_ABOUT_VIDEO_URL;

  return <>
    <section className="about-title-section"><div className="container"><span className="eyebrow">CARE NOVA LAB</span><h1>About Us</h1></div></section>
    <section className="about-film-section" aria-label="CareNova Lab introduction film"><div className="container"><div className="about-film-frame"><video autoPlay={Boolean(aboutVideoUrl)} loop muted playsInline poster="/images/homepage-laboratory-hero.webp" aria-label="CareNova Lab product development and laboratory film">{aboutVideoUrl ? <source src={aboutVideoUrl} type="video/mp4" /> : null}</video>{!aboutVideoUrl && <div className="about-film-note">CareNova Lab</div>}</div></div></section>
    <section className="about-intro-section section section-white anchor-target" id="brand-introduction"><div className="container about-intro-copy"><SectionHeading eyebrow="WHERE CLARITY MEETS EXECUTION" title="Where Beauty Ideas Become Ready-to-Launch Products" text="We bring together product thinking, formulation direction, packaging decisions and coordinated supply-chain execution—so every next step is easier to assess." /></div></section>
    <section className="section section-muted anchor-target" id="our-story"><div className="container split-grid about-story-grid"><div className="about-story-image"><img src="/images/insights/heroes/regulatory-compliance.webp" alt="Beauty product consultants reviewing a project brief" /></div><div><span className="eyebrow">OUR STORY</span><h2>A Clearer Way to Build a Beauty Product</h2><p>CareNova Lab was created for brands that need more than a product list and a price. A strong product needs a useful brief, informed decisions and a practical route from concept to delivery.</p><p>We begin with the target consumer, channel, product role, quantity and launch objective. Then we coordinate the conversations and matched partners that help turn that direction into a workable project.</p></div></div></section>
    <section className="section section-white anchor-target" id="our-team"><div className="container"><SectionHeading eyebrow="OUR TEAM" title="A Direct Line to Your Product Project" text="Talk with the people coordinating the questions, decisions and next steps behind your brief." /><div className="about-team-grid"><article><img src="/images/team/willow-profile.jpg" alt="Willow, Senior Product Consultant and Project Coordinator" /><div><h3>Willow</h3><span>Senior Product Consultant &amp; Project Coordinator</span><p>Product concepts, formula and packaging directions, samples, OEM/ODM execution and project coordination.</p></div></article><article><img src="/images/team/jasmine-profile.jpg" alt="Jasmine, Product Consultant and Client Support" /><div><h3>Jasmine</h3><span>Product Consultant &amp; Client Support</span><p>Product inquiries, samples, quotations, packaging requirements and project follow-up.</p></div></article></div></div></section><section className="section section-white anchor-target" id="who-we-serve"><div className="container"><SectionHeading eyebrow="WHO WE SERVE" title="Built for Different Stages of Beauty Growth" /><div className="about-audience-grid">{audiences.map(([title, text], index) => <article className="about-audience-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><InquiryButton context={{source:`About ${title}`}}>Talk to Our Team</InquiryButton></article>)}</div></div></section>
    <section className="section section-dark anchor-target" id="capabilities"><div className="container"><SectionHeading eyebrow="OUR CAPABILITIES" title="A Connected Route From Direction to Delivery" text="Every project is built around the actual product, destination market and commercial objective—then confirmed at each step." /><div className="about-capability-grid">{capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section section-white anchor-target" id="global-partnerships"><div className="container split-grid about-partnership-grid"><div><span className="eyebrow">GLOBAL PARTNERSHIPS</span><h2>Support for the Market You Are Building</h2><p>From first samples to repeat orders, we help keep product, packaging, production and market preparation connected across international beauty projects.</p><InquiryButton context={{source:'About global partnerships'}}>Talk to Our Team</InquiryButton></div><img className="content-photo" src="/images/insights/heroes/market-insights.webp" alt="Global beauty market collaboration and launch planning" /></div></section>
  </>;
}
