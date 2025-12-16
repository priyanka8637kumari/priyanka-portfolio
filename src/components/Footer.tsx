
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-gradient mb-2">
              {t('name')}
            </div>
            <p className="text-muted-foreground">
              {t('tagline')}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/priyanka8637kumari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={t('socialLinks.github')}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:prisri0801@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={t('socialLinks.email')}
            >
              <Mail className="h-5 w-5" />
            </a>
             <a
              href="https://www.linkedin.com/in/priyanka-kumari-995901274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={t('socialLinks.linkedin')}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
