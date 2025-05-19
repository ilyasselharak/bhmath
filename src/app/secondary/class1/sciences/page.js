import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Tronc Commun Sciences | BHMath',
  description: 'Ressources mathématiques pour le Tronc Commun Sciences',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/TroncCommum',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/secondary/class1/exercices',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoire/TroncCommum',
    action: 'S\'entraîner'
  }
];

export default function TroncCommunSciences() {
  return (
    <ClassTemplate
      title="Tronc Commun - Sciences"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 