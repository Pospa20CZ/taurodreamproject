import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Music, Globe, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Section } from '@/components/ProjectCard';

const projectData: Record<string, { icon: typeof Music; image: string; gradient: string }> = {
  melody: {
    icon: Music,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80',
    gradient: 'from-pink-500 to-rose-500',
  },
  slovan: {
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
    gradient: 'from-blue-500 to-indigo-500',
  },
  united: {
    icon: Users,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    gradient: 'from-emerald-500 to-teal-500',
  },
  gratitude: {
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80',
    gradient: 'from-amber-500 to-orange-500',
  },
};

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();

  const project = slug ? projectData[slug] : null;
  const projectKey = slug as 'melody' | 'slovan' | 'united' | 'gratitude';

  if (!project) {
    return (
      <Layout>
        <Section className="pt-32">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Project not found
            </h1>
            <Link to="/projects">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.back')}
              </Button>
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  const Icon = project.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={t(`projects.${projectKey}.title`)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('common.back')}
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
                {t(`projects.${projectKey}.title`)}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              {t(`projects.${projectKey}.description`)}
            </p>

            <div className="p-8 rounded-2xl bg-muted/30 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                More details coming soon
              </h3>
              <p className="text-muted-foreground">
                This project page will be expanded with more content, galleries, and updates.
                Enable Lovable Cloud to add database-driven content management.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProjectDetail;
