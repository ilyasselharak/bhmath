import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '3ème année collège | BHMath',
  description: 'Ressources mathématiques pour la troisième année du collège',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/thirdCollege',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/college/class3/exercices',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoir/thirdCollege',
    action: 'S\'entraîner'
  },
  {
    title: 'Résumés',
    href: '/course/thirdCollege/summaries',
    action: 'Réviser'
  },
  {
    title: 'Contrôles',
    href: '/exams/thirdCollege',
    action: 'Se tester'
  }
];

export default function ThirdYearCollege() {
  return (
    <ClassTemplate
      title="3ème année collège"
      description="Cours, exercices et devoirs de mathématiques"
      sections={sections}
    />
  );
} 