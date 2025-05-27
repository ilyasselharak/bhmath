import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème année collège | BHMath',
  description: 'Ressources mathématiques pour la deuxième année du collège',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/secondCollege',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/college/class2/exercices',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/secondCollege',
    action: 'S\'entraîner'
  },
  {
    title: 'Résumés',
    href: '/course/secondCollege/summaries',
    action: 'Réviser'
  },
  {
    title: 'Contrôles',
    href: '/exams/secondCollege',
    action: 'Se tester'
  }
];

export default function SecondYearCollege() {
  return (
    <ClassTemplate
      title="2ème année collège"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 