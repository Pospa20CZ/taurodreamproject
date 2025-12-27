import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, FolderOpen, Image, TrendingUp, Users, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LoginGate from "./LoginGate"; // ← DŮLEŽITÉ

const AdminDashboard = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('admin.total_articles'),
      value: '12',
      change: '+3 this month',
      icon: FileText,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      title: t('admin.total_projects'),
      value: '4',
      change: 'Active',
      icon: FolderOpen,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      title: t('admin.total_media'),
      value: '48',
      change: '+12 this week',
      icon: Image,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
    {
      title: 'Page Views',
      value: '2.4K',
      change: '+18% growth',
      icon: Eye,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
  ];

  const recentActivity = [
    { action: 'Article published', item: 'Welcome to TauroDream', time: '2 hours ago' },
    { action: 'Project updated', item: 'TauroDreamMelody', time: '5 hours ago' },
    { action: 'Media uploaded', item: '5 new images', time: 'Yesterday' },
    { action: 'Translation added', item: 'Portuguese content', time: '2 days ago' },
  ];

  return (
    <LoginGate>
      <div className="space-y-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  {t('admin.recent_activity')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.item}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-left">
                    <FileText className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium text-foreground">New Article</p>
                  </button>
                  <button className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-left">
                    <FolderOpen className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium text-foreground">New Project</p>
                  </button>
                  <button className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-left">
                    <Image className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium text-foreground">Upload Media</p>
                  </button>
                  <button className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-left">
                    <TrendingUp className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm font-medium text-foreground">View Analytics</p>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Enable Full Admin Features
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect Lovable Cloud to enable database-driven content management, user authentication,
                and real-time updates. Your articles, projects, and media will be stored securely.
              </p>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </LoginGate>
  );
};

export default AdminDashboard;
