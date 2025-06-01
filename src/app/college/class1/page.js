import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '1ère année collège | BHMath',
  description: 'Ressources mathématiques pour la première année du collège',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/firstCollege',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/exercice/firstCollege',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/firstCollege',
    action: 'S\'entraîner'
  }
];

export default function FirstYearCollege() {
  return (
    <ClassTemplate
      title="1ère année collège"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 