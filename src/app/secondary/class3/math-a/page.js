import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème Bac Math A | BHMath',
  description: 'Ressources mathématiques pour la 2ème Bac Sciences Mathématiques A',
};

const sections = [
  {
    title: 'Cours',
    href: '/course/2BacMath',
    action: 'Voir les cours'
  },
  {
    title: 'Exercices',
    description: 'Exercices et problèmes pratiques',
    href: '/secondary/class3/exercices',
    action: 'Pratiquer'
  },
  {
    title: 'Devoirs',
    href: '/devoire/2BacMath',
    action: 'S\'entraîner'
  },
  {
    title: 'Examens Nationaux',
    href: '/exams/2BacMath/national',
    action: 'Se préparer'
  },
  {
    title: 'Examens Régionaux',
    href: '/exams/2BacMath/regional',
    action: 'Réviser'
  }
];

export default function SecondBacMathA() {
  return (
    <ClassTemplate
      title="2ème Bac - Sciences Mathématiques A"
      description="Cours, exercices et préparation aux examens nationaux"
      sections={sections}
    />
  );
} 