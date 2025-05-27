import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème année du Baccalauréat | BHMath',
  description: 'Ressources mathématiques pour la 2ème année du Baccalauréat',
};

const sections = [
  {
    title: 'Mathématiques A',
    description: 'Cours et exercices pour la filière Mathématiques A',
    href: '/secondary/class3/math-a',
    action: 'Accéder'
  },
  {
    title: 'Mathématiques B',
    description: 'Cours et exercices pour la filière Mathématiques B',
    href: '/secondary/class3/math-b',
    action: 'Accéder'
  },
  {
    title: 'Sciences Physiques et SVT',
    description: 'Cours et exercices pour la filière Sciences Physiques et SVT',
    href: '/secondary/class3/pc-svt',
    action: 'Accéder'
  },
  {
    title: 'Lettres',
    description: 'Cours et exercices pour la filière Lettres',
    href: '/secondary/class3/lettres',
    action: 'Accéder'
  },
  {
    title: 'Économie',
    description: 'Cours et exercices pour la filière Économie',
    href: '/secondary/class3/ECO',
    action: 'Accéder'
  }
];

export default function SecondBac() {
  return (
    <ClassTemplate
      title="2ème année du Baccalauréat"
      description="Choisissez votre filière pour accéder aux ressources"
      sections={sections}
    />
  );
} 