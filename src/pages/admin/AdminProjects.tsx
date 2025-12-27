import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockProjects = [
  {
    id: 1,
    title: 'TauroDreamMelody',
    slug: 'melody',
    status: 'active',
    languages: ['en', 'cz', 'es', 'it', 'pt'],
    articlesCount: 5,
  },
  {
    id: 2,
    title: 'TauroDreamSlovan',
    slug: 'slovan',
    status: 'active',
    languages: ['en', 'cz', 'es'],
    articlesCount: 3,
  },
  {
    id: 3,
    title: 'TauroDreamUnited',
    slug: 'united',
    status: 'active',
    languages: ['en', 'es', 'pt'],
    articlesCount: 2,
  },
  {
    id: 4,
    title: 'TauroDreamGratitude',
    slug: 'gratitude',
    status: 'draft',
    languages: ['en'],
    articlesCount: 1,
  },
];

const AdminProjects = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = mockProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">{t('admin.projects')}</h1>
          <p className="text-sm text-muted-foreground">Manage your subprojects and translations</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          {t('admin.create_new')}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <CardTitle>All Projects</CardTitle>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t('common.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Languages</TableHead>
                    <TableHead>Articles</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">{project.title}</p>
                          <p className="text-xs text-muted-foreground">/projects/{project.slug}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={project.status === 'active' ? 'default' : 'secondary'}
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3 text-muted-foreground mr-1" />
                          {project.languages.slice(0, 3).map((lang) => (
                            <span
                              key={lang}
                              className="text-xs px-1.5 py-0.5 bg-muted rounded"
                            >
                              {lang.toUpperCase()}
                            </span>
                          ))}
                          {project.languages.length > 3 && (
                            <span className="text-xs text-muted-foreground">
                              +{project.languages.length - 3}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {project.articlesCount} articles
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              Actions
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                              <Eye className="w-4 h-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Edit className="w-4 h-4" />
                              {t('admin.edit')}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-destructive">
                              <Trash2 className="w-4 h-4" />
                              {t('admin.delete')}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No projects found
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminProjects;
