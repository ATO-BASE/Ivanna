import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
// we'll use a simple local accordion implementation (Radix caused toggle edge cases)
import { useLanguage } from '@/contexts/LanguageContext';
import { useSeason } from '@/contexts/SeasonContext';
import avatar1 from '@/assets/avatar1.jpg';
import avatar2 from '@/assets/avatar2.jpg';
import avatar3 from '@/assets/avatar3.jpg';
import avatar4 from '@/assets/avatar4.jpg';


const About = () => {
  const { t } = useLanguage();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const photos = [
    avatar1,
    avatar2,
    avatar3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, photos.length]);

  const skills = [
    {
      id: 'shopify-development',
      name: 'Shopify Development',
      level: 95,
      years: 6,
      img: '/src/assets/skill/shopify1.png',
      description:
        'Bespoke Shopify themes, advanced Liquid templates and schema work. I focus on performance, accessibility, and maintainable theme architecture for long-lived storefronts.',
      projects: [
        { title: 'Eco Supplies Storefront', href: '#' },
        { title: 'Subscription Apparel Theme', href: '#' },
      ],
    },
    {
      id: 'shopify-app',
      name: 'Shopify Apps & Integrations',
      level: 88,
      years: 4,
      img: '/src/assets/skill/shopify.png',
      description: 'Embedded apps, webhooks, OAuth flows, and integrations that extend merchant capabilities and automate business processes.',
      projects: [{ title: 'Inventory Sync App', href: '#' }],
    },
    {
      id: 'react-next',
      name: 'React & Next.js',
      level: 95,
      years: 6,
      img: '/src/assets/skill/react.png',
      description: 'Modern component-based frontends with emphasis on performance, SSR/SSG patterns and accessible UIs.',
      projects: [{ title: 'Headless Shopfront', href: '#' }],
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      level: 90,
      years: 6,
      img: '/src/assets/skill/typescript.png',
      description: 'Strong typing across frontend and backend to reduce runtime errors and improve developer experience.',
      projects: [{ title: 'Shared Types & SDK', href: '#' }],
    },
    {
      id: 'vue',
      name: 'Vue',
      level: 90,
      years: 3,
      img: '/src/assets/skill/vue.png',
      description: 'Progressive interfaces and component-driven UIs for interactive web experiences.',
      projects: [{ title: 'Local Store UI', href: '#' }],
    },
    {
      id: 'node-php',
      name: 'Node.js & PHP',
      level: 85,
      years: 7,
      img: '/src/assets/skill/node.png',
      description: 'API services, background workers and integrations powering storefront features and automation.',
      projects: [{ title: 'Order Processing API', href: '#' }],
    },
    {
      id: 'uiux',
      name: 'UI/UX Design',
      level: 80,
      years: 5,
      img: '/src/assets/skill/figma.png',
      description: 'Design systems, component libraries and close designer-engineer collaboration to ship polished UIs.',
      projects: [{ title: 'Design System', href: '#' }],
    },
    {
      id: 'laravel',
      name: 'Laravel',
      level: 75,
      years: 4,
      img: '/src/assets/skill/laravel.png',
      description: 'Admin panels, custom integrations and backend services built with Eloquent and Laravel conventions.',
      projects: [{ title: 'Admin Panel', href: '#' }],
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState<null | (typeof skills)[number]>(null);
  const { season } = useSeason();

  // control snapshot state for aria / toggle label
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const firstFaqTriggerRef = useRef<HTMLButtonElement | null>(null);

  const tools = [
    { name: 'VS Code', frequency: 'Daily' },
    { name: 'Figma', frequency: 'Daily' },
    { name: 'Git & GitHub', frequency: 'Daily' },
    { name: 'Docker', frequency: 'Weekly' },
    { name: 'Postman', frequency: 'Weekly' },
  ];

  const ideas = [
    {
      title: 'AI-Powered E-commerce',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&h=300&fit=crop',
      feasibility: 85,
      profitability: 90,
      interested: 12,
      investors: 3,
      funding: '$50k',
    },
    {
      title: 'Sustainability Platform',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
      feasibility: 78,
      profitability: 75,
      interested: 8,
      investors: 2,
      funding: '$30k',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center animate-fade-in">
          {t('about.title')}
        </h1>

        {/* Photo Carousel & Bio */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Photo Carousel */}
          <div
            className="relative h-96 rounded-[var(--radius)] overflow-hidden card-gradient animate-slide-in-left about-carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={photos[currentPhoto]}
              alt="Profile"
              className="object-cover transition-all duration-[1000ms]"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPhoto((prev) => (prev + 1) % photos.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* autoplay is handled in a top-level useEffect */}

          {/* Bio */}
          <div className="flex flex-col justify-center animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-4">Ivanna Havryliuk</h2>
            {/* <p className="text-lg text-muted-foreground mb-4">I’m a Shopify and full‑stack developer with years of hands‑on experience building production storefronts and custom tooling. I enjoy translating design into accurate, performant code and shipping storefronts that delight customers and achieve product goals.</p> */}

            {/* <div className="text-muted-foreground intro-scroll mb-4">
              <p className="mb-3">My Shopify work includes bespoke themes, custom Liquid templates, advanced schema/configuration work, and embedded apps that integrate with external systems. I’ve helped stores implement subscriptions, bulk import pipelines, complex checkout customizations, and payment integrations tailored to specific business needs.</p>

              <p className="mb-3">On the frontend I use React, Next.js and TypeScript, and pair these with backend technologies like Node and Laravel when a custom API or app is required. I take performance, accessibility and maintainability seriously — shipping code with future development and scale in mind.</p>

              <p className="mb-0">Beyond development, I collaborate closely with designers and product teams to translate Figma into polished UIs, build internal tooling to speed repeatable work, and use automation to reduce manual tasks so teams can focus on impact.</p>
            </div> */}

            {/* FAQ / Accordion */}
            <div className="mt-2">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // toggle the first FAQ programmatically and focus the trigger for a11y
                    if (openFaq === 'q-1') {
                      setOpenFaq(null);
                    } else {
                      setOpenFaq('q-1');
                      // focus the trigger so keyboard / screen reader users are placed inside
                      setTimeout(() => firstFaqTriggerRef.current?.focus(), 0);
                    }
                  }}
                  aria-pressed={openFaq !== null}
                  aria-label={openFaq ? 'Close FAQ' : 'Open FAQ'}
                >
                  {openFaq ? 'Close' : 'Open'} FAQ
                </Button>
              </div>
              <div className="bg-card rounded-lg border p-2">
                {/** Custom lightweight accordion (single-open) **/}
                {[
                  {
                    id: 'q-1',
                    title: 'What type of Shopify work do you do?',
                    body:
                      "I build and customize Shopify storefronts (themes), implement schema-driven customizations and build embedded Shopify apps. I handle checkout tweaks, subscriptions, bulk imports, integrations with third-party services and app development when stores need custom behaviour.",
                  },
                  {
                    id: 'q-2',
                    title: 'Which technologies do you use?',
                    body:
                      'I typically use React, Next.js and TypeScript for frontends, and Node or Laravel for backend services. For Shopify-specific work I use Liquid, the Shopify APIs, and create apps that use webhooks and OAuth where applicable.',
                  },
                  {
                    id: 'q-3',
                    title: 'How do you approach design & Figma handoffs?',
                    body:
                      'I closely follow Figma specs — translating components into reusable, accessible UI patterns and documenting decisions for future maintenance. I focus on pixel-appropriate fidelity and test across devices before handoff.',
                  },
                  {
                    id: 'q-4',
                    title: 'Are you available for freelance or full-time work?',
                    body:
                      'Availability varies — reach out via the Contact page with your timeline and scope and I’ll reply with next steps and availability. I prefer clear requirements so I can propose timelines and an estimate.',
                  },
                ].map((faq) => (
                  <div key={faq.id} className="faq-item">
                    <button
                      id={`${faq.id}-trigger`}
                      ref={faq.id === 'q-1' ? firstFaqTriggerRef : undefined}
                      className={`faq-trigger ${openFaq === faq.id ? 'bg-card-foreground/2 rounded-t-lg' : ''}`}
                      aria-expanded={openFaq === faq.id ? 'true' : 'false'}
                      aria-controls={`${faq.id}-panel`}
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-primary mt-2" aria-hidden />
                        <span className="text-sm font-medium leading-tight">{faq.title}</span>
                      </div>

                      <ChevronDown className={`faq-chevron ${openFaq === faq.id ? 'rotate-180 text-primary' : ''}`} aria-hidden />
                    </button>

                    <div
                      id={`${faq.id}-panel`}
                      role="region"
                      aria-labelledby={`${faq.id}-trigger`}
                      className={`faq-panel ${openFaq === faq.id ? 'open faq-open-bg rounded-b-lg shadow-sm' : ''}`}
                      aria-hidden={openFaq === faq.id ? 'false' : 'true'}
                    >
                      <p className="text-sm text-muted-foreground">{faq.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-16" >
          <h2 className="text-3xl font-bold mb-8" style={{fontWeight:'bold'}}>{t('about.skills')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div key={skill.id} className="relative">
                <Card
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedSkill(skill)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSkill(skill);
                    }
                  }}
                  className="p-6 animate-scale-in hover:bg-dark transition-transform transition-shadow will-change-transform duration-300 ease-out transform-gpu hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] focus-visible:shadow-lg focus-visible:-translate-y-1 focus-visible:scale-[1.03] motion-reduce:transform-none cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s`, transition: '0.5s', backgroundColor:'rgba(0,0,0,0.2)' }}
                >

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <img src={skill.img} alt={skill.name} className="w-10 h-10 rounded-full object-cover border-2 border-border" />
                      <div>
                        <div className="font-medium text-bold text-sm">{skill.name}</div>
                        <div className="text-xs text-muted-foreground">{skill.years} years experience</div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">{skill.level}%</div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </Card>
              </div>
            ))}
          </div>

          {/* Skill detail modal */}
          <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
            {selectedSkill && (
              <DialogContent className="skill-modal">
                <div className="skill-modal-header">
                  <img src={selectedSkill.img} alt={selectedSkill.name} className="avatar-large" />
                  <div className="pr-4">
                    <DialogTitle className="text-lg leading-tight">{selectedSkill.name}</DialogTitle>
                    <div className="text-xs text-muted-foreground mt-1">{selectedSkill.years} years • {selectedSkill.level}% proficiency</div>
                  </div>

                  <div className="season-deco" aria-hidden>
                    {season === 'spring' ? '🌸' : season === 'summer' ? '☀️' : season === 'fall' ? '🍂' : '❄️'}
                  </div>
                </div>
                <DialogDescription>
                  <p className="mb-2 text-sm text-muted-foreground">{selectedSkill.description}</p>
                  <div className="flex gap-4 items-center mb-4">
                    <strong className="text-sm">Years:</strong>
                    <span className="text-sm text-muted-foreground">{selectedSkill.years} years</span>
                    <strong className="text-sm">Proficiency:</strong>
                    <span className="text-sm text-muted-foreground">{selectedSkill.level}%</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Example projects</h4>
                    <ul className="projects-list ml-0 space-y-2">
                      {selectedSkill.projects.map((p, i) => (
                        <li key={i} className="project-item list-none">
                          <span className="season-sparkle" aria-hidden />
                          <a href={p.href} target="_blank" rel="noreferrer" className="text-primary ml-2 font-medium hover:underline">
                            {p.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogDescription>

                <DialogFooter>
                  <DialogClose>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>
        </section>

        {/* Tools */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t('about.tools')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, idx) => (
              <Card key={tool.name} className="p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="font-semibold mb-2">{tool.name}</h3>
                <span className="text-sm text-muted-foreground">{tool.frequency}</span>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Project Ideas */}
        <section>
          <h2 className="text-3xl font-bold mb-8">{t('about.ideas')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ideas.map((idea, idx) => (
              <Card key={idea.title} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                <img src={idea.image} alt={idea.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{idea.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Feasibility</span>
                        <span>{idea.feasibility}%</span>
                      </div>
                      <Progress value={idea.feasibility} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Profitability</span>
                        <span>{idea.profitability}%</span>
                      </div>
                      <Progress value={idea.profitability} className="h-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-2xl font-bold text-primary">{idea.interested}</p>
                        <p className="text-xs text-muted-foreground">Interested</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{idea.investors}</p>
                        <p className="text-xs text-muted-foreground">Investors</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{idea.funding}</p>
                        <p className="text-xs text-muted-foreground">Funding</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
