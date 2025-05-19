import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '1ère Bac Sciences Math | BHMath',
  description: 'Ressources mathématiques pour la 1ère Bac Sciences Mathématiques',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/firstBacMath',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/secondary/class2/exercices',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoire/firstBacMath',
    action: 'S\'entraîner'
  },
  {
    title: 'Examens',
    href: '/exams/firstBacMath',
    action: 'Se préparer'
  }
];

export default function FirstBacSciencesMath() {
  return (
    <ClassTemplate
      title="1ère Bac - Sciences Mathématiques"
      description="Cours, exercices et devoirs de mathématiques pour Sciences Math"
      sections={sections}
    />
  );
} 