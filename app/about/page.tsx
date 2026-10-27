import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { InquiryButton } from '@/components/inquiry-provider';
import { asset } from '@/lib/assets';

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
  ['Product Development', 'Clarify the product role, target customer, formula direction and sampling priorities before execution.'],
  ['Supply Chain Coordination', 'Connect suitable development and manufacturing partners around the product, quantity and packaging needs.'],
  ['Launch Preparation', 'Organize the product information, packaging decisions and market-facing materials required for launch.']
];

export default function AboutPage() {
  const aboutVideoUrl = process.env.NEXT_PUBLIC_ABOUT_VIDEO_URL;

  return <>
    <section className="about-title-section"><div className="container"><span className="eyebrow">CARE NOVA LAB</span><h1>About Us</h1></div></section>
    <section className="about-film-section" aria-label="CareNova Lab introduction film"><div className="container"><div className="about-film-frame"><video autoPlay={Boolean(aboutVideoUrl)} loop muted playsInline poster="/images/homepage-laboratory-hero.webp" aria-label="CareNova Lab product development and laboratory film">{aboutVideoUrl ? <source src={aboutVideoUrl} type="video/mp4" /> : null}</video>{!aboutVideoUrl && <div className="about-film-note">CareNova Lab</div>}</div></div></section>
    <section className="about-intro-section section section-white anchor-target" id="brand-introduction"><div className="container about-intro-copy"><SectionHeading eyebrow="WHERE CLARITY MEETS EXECUTION" title="Where Product Insight Meets Practical Execution" text="CareNova Lab helps overseas beauty and personal care brands clarify product opportunities and execute them through coordinated OEM/ODM supply chains in China." /></div></section>
    <section className="section section-muted anchor-target" id="our-story"><div className="container split-grid about-story-grid"><div className="about-story-image"><img src="/images/homepage-laboratory-hero.webp" alt="CareNova Lab product development and laboratory coordination" /></div><div><span className="eyebrow">OUR STORY</span><h2>This Is Where a Product Plan Takes Shape</h2><p>CareNova Lab was created to give beauty brands a clearer route from opportunity to execution. We begin with the target consumer, channel, product role, quantity and launch objective, then connect the partners and decisions required to move forward.</p><p>We are not presented as the owner of every production capability shown on the website. Instead, we coordinate practical development routes with matched manufacturing partners according to the actual project.</p></div></div></section>
    <section className="section section-white anchor-target" id="who-we-serve"><div className="container"><SectionHeading eyebrow="WHO WE SERVE" title="Built for Different Stages of Beauty Growth" /><div className="about-audience-grid">{audiences.map(([title, text], index) => <article className="about-audience-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><InquiryButton context={{source:`About ${title}`}}>Talk to Our Team</InquiryButton></article>)}</div></div></section>
    <section className="section section-dark anchor-target" id="capabilities"><div className="container"><SectionHeading eyebrow="OUR CAPABILITIES" title="A Connected Route From Direction to Delivery" text="Every project is built around the actual product, destination market and commercial objective—then confirmed at each step." /><div className="about-capability-grid">{capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section section-white anchor-target" id="global-partnerships"><div className="container split-grid about-partnership-grid"><div><span className="eyebrow">GLOBAL PARTNERSHIPS</span><h2>Support for the Market You Are Building</h2><p>From first samples to repeat orders, we help keep product, packaging, production and market preparation connected across global projects.</p><InquiryButton context={{source:'About global partnerships'}}>Talk to Our Team</InquiryButton></div><img className="content-photo" src={asset('/images/site/insight-step-5.webp')} alt="Beauty product manufacturing and production coordination" /></div></section>
  </>;
}
