import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Award, Zap } from 'lucide-react';
import Layout from '@/components/Layout';
import { Section, SectionHeader } from '@/components/ProjectCard';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.creativity'),
      description: t('about.values.creativity_desc'),
    },
    {
      icon: Users,
      title: t('about.values.community'),
      description: t('about.values.community_desc'),
    },
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellence_desc'),
    },
    {
      icon: Zap,
      title: t('about.values.impact'),
      description: t('about.values.impact_desc'),
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
              {t('about.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/70"
            >
              {t('about.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Description */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-2xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              {t('about.mission_title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-2xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              {t('about.vision_title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.vision')}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader title={t('about.values_title')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default About;
