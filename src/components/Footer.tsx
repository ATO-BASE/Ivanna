import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-cursive text-gradient mb-4" style={{lineHeight:'4rem'}}>Ivanna Havryliuk</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack & Shopify Developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.projects')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground mb-2">
              secretsuperstar000922@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">
              Store, SaaS, and custom web development services available.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} IVANNA. {t('footer.rights')}.</p>
          <p className="mt-2">{t('footer.built')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
