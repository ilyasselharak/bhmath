import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Première année du Baccalauréat | BHMath',
  description: 'Ressources mathématiques pour la première année du Baccalauréat',
};

const sections = [
  {
    title: 'Sciences Mathématiques',
    description: 'Cours et exercices pour la filière Sciences Mathématiques',
    href: '/secondary/class2/sciences-math',
    action: 'Accéder'
  },
  {
    title: 'Sciences Physiques et SVT',
    description: 'Cours et exercices pour la filière Sciences Physiques et SVT',
    href: '/secondary/class2/pc-svt',
    action: 'Accéder'
  },
  {
    title: 'Lettres',
    description: 'Cours et exercices pour la filière Lettres',
    href: '/secondary/class2/lettres',
    action: 'Accéder'
  },
  {
    title: 'Économie',
    description: 'Cours et exercices pour la filière Économie',
    href: '/secondary/class2/economie',
    action: 'Accéder'
  }
];

export default function FirstBac() {
  return (
    <ClassTemplate
      title="Première année du Baccalauréat"
      description="Choisissez votre filière pour accéder aux ressources"
      sections={sections}
    />
  );
} 