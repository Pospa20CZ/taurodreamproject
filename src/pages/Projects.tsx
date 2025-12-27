import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { ProjectCard, Section, SectionHeader } from '@/components/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.melody.title'),
      description: t('projects.melody.description'),
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      link: '/projects/melody',
    },
    {
      title: t('projects.slovan.title'),
      description: t('projects.slovan.description'),
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      link: '/projects/slovan',
    },
    {
      title: t('projects.united.title'),
      description: t('projects.united.description'),
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      link: '/projects/united',
    },
    {
      title: t('projects.gratitude.title'),
      description: t('projects.gratitude.description'),
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
      link: '/projects/gratitude',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6"
            >
              {t('projects.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/70"
            >
              {t('projects.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.link}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              index={index}
              ctaText={t('projects.view_project')}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
