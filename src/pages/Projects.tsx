import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PasswordDialog from '@/components/PasswordDialog';
import myenamelpins from '@/assets/projects/myenamelpins.png';
import wearelively from '@/assets/projects/wearelively.png';
import swisspower from '@/assets/projects/swisspower.png';
import kawaibox from '@/assets/projects/kawaibox.png';
import kcosmetic from '@/assets/projects/kyliecosmetic.png';
import mediscience from '@/assets/projects/tdgscientific.png';
import wildpoker from '@/assets/projects/wildpoker.png';
import instapill from '@/assets/projects/instapill.png';
import dustnboots from '@/assets/projects/dustnboots.png';
import femlycare from '@/assets/projects/femlycare.png';
import kintsugimethod from '@/assets/projects/kintsugimethod.png';
import traeger from '@/assets/projects/traeger.png';

type ProjectFilter = 'all' | 'react' | 'next' | 'html' | 'shopify' | 'php' | 'laravel' | 'wordpress';

interface Project {
  id: number;
  title: string;
  description: string;
  /** longer, detailed project description that appears inside the DESCRIBE modal */
  details?: string;
  image: string;
  tags: string[];
  category: ProjectFilter[];
  demoUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [pendingGithubUrl, setPendingGithubUrl] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewCode = (githubUrl?: string) => {
    if (githubUrl) {
      setPendingGithubUrl(githubUrl);
      setPasswordDialogOpen(true);
    }
  };

  const handlePasswordSuccess = () => {
    if (pendingGithubUrl) {
      window.open(pendingGithubUrl, '_blank');
      setPendingGithubUrl('');
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Myenamel Pins',
      description: 'I built this store from scratch with Dawn I customized all the storefront',
      details:
        'This project was rebuilt from the ground up and redesigned as SHOPIFY 2.0. The original theme was DEBUTE, and the new theme is DAWN (fully customizable). This store launch included features such as file uploads, reviews, and options.',
      image: myenamelpins,
      tags: ['Shopify', 'liquid', 'CSS'],
      category: ['shopify'],
      demoUrl: 'https://myenamelpins.com/',
    },
    {
      id: 2,
      title: 'WE ARE LIVELY',
      description: 'Modern portfolio with Next.js and TypeScript',
      details:
        'We cloned the project from scratch and implemented more advanced features for theme customization, such as the image animation feature on the homepage and the creation of a product introduction bar.',
      image: wearelively,
      tags: ['shhopify', 'html', 'javascript','css'],
      category: ['shopify'],
      demoUrl: 'https://we-are-lively.com/',
    },
    {
      id: 3,
      title: 'SWISSPOWER',
      description: 'Content management system built with Laravel',
      details:
        'I have completed tasks such as building a funnel for the basic store, modifying the front-end, and implementing functions such as language setting translation.',
      image: swisspower,
      tags: ['shopify', 'html', 'css'],
      category: ['shopify', 'html'],
      demoUrl: 'https://swisspower.it',
    },
    {
      id: 4,
      title: 'KAWAIBOX',
      description: 'Responsive landing page with pure HTML/CSS/JS',
      details:
        'For the store front, I built the store from scratch and worked on review settings, subscription settings through the subscription app, product uploads, Kategori, etc. with Japanese friends',
      image: kawaibox,
      tags: ['shopify', 'CSS', 'JavaScript'],
      category: ['shopify', 'html'],
      demoUrl: 'https://www.kawaiibox.com/',
    },
    {
      id: 5,
      title: 'Kylie Cosmetic',
      description: 'Custom WordPress theme for business websites',
      details:
        'I set up product color options, used a product discount app, customized themes for the front-end, set up collections, modified templates, and more.',
      image: kcosmetic,
      tags: ['shopify', 'html', 'CSS'],
      category: ['shopify', 'html'],
      demoUrl: 'https://kyliecosmetics.com/',
    },
    {
      id: 6,
      title: 'Medical Scientific',
      description: 'Analytics dashboard with React and D3.js',
      details:
        'I provide full-stack WordPress engineering, including custom theme development, plugin architecture, REST API integrations, database optimization, and headless WordPress using React/Next.js. I work extensively with WooCommerce, automate workflows, improve performance, and ensure strong security across all environments. My approach emphasizes maintainable code, scalable infrastructure, and high-quality development standards.',
      image: mediscience,
      tags: ['wordpress', 'php'],
      category: ['wordpress','php'],
      demoUrl: 'https://tdgscientific.com/',
    },
    {
      id: 7,
      title: 'Wild Poker',
      description: 'Analytics dashboard with React and D3.js',
      details:
        'I took charge of this project from the beginning and completed it in about a month. The projects main feature is a poker tournament. I built a separate admin page and used React, Node, and MySQL to build the project. I elegantly implemented complex data relationships using ORM syntax.',
      image: wildpoker,
      tags: ['react', 'node', 'typescript'],
      category: ['react'],
      githubUrl: 'https://github.com/example/ATO-BASE/wildpoker-frontend',
      demoUrl: 'https://wildpoker-frontend.vercel.app/',
    },
    {
      id: 8,
      title: 'INSTAPILL',
      description: 'Analytics dashboard with React and D3.js',
      details:
        'I set up the environment from the beginning and found ways to monetize the app by using the subscribe, bundle, etc. app in the guide bar of the Kegori settings. I performed tasks such as creating and uploading product images.',
      image: instapill,
      tags: ['shopify', 'html'],
      category: ['react'],
      githubUrl: 'https://github.com/example/repo',
      demoUrl: 'https://instapill.com/',
    },
    {
      id: 9,
      title: 'Dust Boots',
      description: 'Analytics dashboard with React and D3.js',
      details:
        'I built this project from start to finish. I created the store using the Dawn theme and customized the front-end. I also set up product reviews, subscriptions, and other features using apps.',
      image: dustnboots,
      tags: ['Shopify', 'html'],
      category: ['shopify','react'],
      demoUrl: 'https://dustnboots.com/',
    },
    {
      id: 10,
      title: 'FEMLYCARE',
      description: 'This is health care center for the sepa payment integration',
      details:
        'I worked on this project from the ground up, diversifying payment methods, and then built a separate external NODE backend to implement SEPA payments. When a user purchases a product, an invoice arrives in their inbox, and they are redirected to the payment page to complete the payment process.',
      image: femlycare,
      tags: ['Shopify', 'html'],
      category: ['shopify','react'],
      demoUrl: 'https://femlycare.com/',
    },
    {
      id: 11,
      title: 'KINTSUGI METHOD',
      description: 'This is magic method store for the kintsugi method',
      details:
        'The front is a bit pathetic, but dont complain. It just fulfilled the requirements that Client requested for. Haha~~',
      image: kintsugimethod,
      tags: ['Shopify', 'html'],
      category: ['shopify','react'],
      demoUrl: 'https://www.kintsugimethod.co.uk/',
    },
    {
      id: 12,
      title: 'TRA EGER Restrourant',
      description: 'this is restourant site built with NEXT framework',
      details:
        'This project involved numerous developers, not just me. I used the NEXT framework to integrate various APIs and build a functional frontend. The backend was also built with NEXT.',
      image: traeger,
      tags: ['next', 'react', 'typescript'],
      category: ['next','shopify','react', 'html'],
      demoUrl: 'https://traeger.com/',
    },
  ];

  const filters: { key: ProjectFilter; label: string }[] = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'shopify', label: t('projects.filter.shopify') },
    { key: 'react', label: t('projects.filter.react') },
    { key: 'next', label: t('projects.filter.next') },
    { key: 'html', label: t('projects.filter.html') },
    { key: 'php', label: t('projects.filter.php') },
    { key: 'laravel', label: t('projects.filter.laravel') },
    { key: 'wordpress', label: t('projects.filter.wordpress') },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4 text-center animate-fade-in">
          {t('projects.title')}
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          A collection of my recent work and experiments
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.key)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.viewMore')}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => handleViewCode(project.githubUrl)}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t('projects.viewCode')}
                    </Button>
                  )}
               
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  </div>

                  <div className="hidden sm:block">
                    <Button size="sm" variant="outline" onClick={() => setSelectedProject(project)}>
                      DESCRIBE
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Project detail dialog */}
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            {selectedProject && (
              <DialogContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-28 h-20 object-cover rounded-md" />
                    <div>
                      <DialogTitle>{selectedProject.title}</DialogTitle>
                      <div className="text-xs text-muted-foreground mt-1">{selectedProject.tags.join(' • ')}</div>
                    </div>
                    
                  </div>


                  <DialogDescription>
                    {/* short summary (existing) */}
                    <p className="mb-3 text-sm text-muted-foreground">{selectedProject.description}</p>

                    {/* long details — prefer `details` when available */}
                    {selectedProject.details ? (
                      <div className="mb-3 text-sm text-muted-foreground">{selectedProject.details}</div>
                    ) : null}

                    <div className="mb-3">
                      <h4 className="font-semibold mb-2">Work & responsibilities</h4>
                      <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                        <li>Architecture & implementation of the storefront or dashboard.</li>
                        <li>Responsiveness, accessibility and performance optimizations.</li>
                        <li>Integration with third-party APIs, payment or subscription flows where applicable.</li>
                        <li>Deployment and maintenance recommendations for production readiness.</li>
                      </ul>
                    </div>

                    <div className="flex gap-2 items-center">
                      {selectedProject.demoUrl && (
                        <Button size="sm" variant="secondary" onClick={() => window.open(selectedProject.demoUrl, '_blank')}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}

                      {selectedProject.githubUrl && (
                        <Button size="sm" variant="secondary" onClick={() => handleViewCode(selectedProject.githubUrl)}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </DialogDescription>

                  <DialogFooter>
                    <DialogClose>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </div>

      <PasswordDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
        onSuccess={handlePasswordSuccess}
        correctPassword="939256858"
      />
    </div>
  );
};

export default Projects;
