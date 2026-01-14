import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
  const skills = t('skills.list', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              {t('title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column – text */}
            <div className="space-y-7 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <Trans
                  i18nKey="paragraphs.intro"
                  ns="about"
                  components={{
                    highlight: <span className="text-primary font-semibold" />,
                    link: (
                      <a
                        href="https://www.hausin.app/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary ml-1"
                      />
                    ),
                  }}
                />
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <Trans
                  i18nKey="paragraphs.skills"
                  ns="about"
                  components={{
                    highlight: <span className="text-primary font-semibold" />,
                  }}
                />
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('paragraphs.goals')}
              </p>
            </div>

            {/* Right column – skills + internships */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {t('profile.title')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('profile.description')}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {t('skills.title')}
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-secondary/50 px-3 py-2 rounded-lg font-medium text-center hover:bg-secondary transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {t('internships.title')}
                </h3>

                <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary">
                    {t('internships.swirl.title')}
                  </h4>
                  <p className="text-muted-foreground">{t('internships.swirl.company')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('internships.swirl.period')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('internships.swirl.description')}
                  </p>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary">
                    {t('internships.yoice.title')}
                  </h4>
                  <p className="text-muted-foreground">{t('internships.yoice.company')}</p>
                  <p className="text-sm text-muted-foreground">
                    {t('internships.yoice.period')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('internships.yoice.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
