import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: '2ème année du Baccalauréat | BHMath',
  description: 'Ressources mathématiques pour la 2ème année du Baccalauréat',
};

const stats = [
  { value: '25+', label: 'Chapitres' },
  { value: '600+', label: 'Exercices' },
  { value: '150+', label: 'Devoirs' },
  { value: '5', label: 'Filières' }
];

const curriculum = [
  {
    title: 'Analyse avancée',
    description: 'Intégrales, primitives, équations différentielles'
  },
  {
    title: 'Nombres complexes',
    description: 'Opérations, forme exponentielle et applications'
  },
  {
    title: 'Géométrie dans l\'espace',
    description: 'Vecteurs, droites, plans et distances'
  },
  {
    title: 'Probabilités continues',
    description: 'Lois de probabilité et variables aléatoires continues'
  },
  {
    title: 'Statistiques inférentielles',
    description: 'Estimation, tests d\'hypothèses et intervalles de confiance'
  },
  {
    title: 'Suites et séries',
    description: 'Convergence, séries numériques et applications'
  },
  {
    title: 'Fonctions de plusieurs variables',
    description: 'Dérivées partielles et optimisation'
  },
  {
    title: 'Préparation au bac',
    description: 'Sujets types, méthodes et stratégies d\'examen'
  }
];

const sections = [
  {
    title: 'Mathématiques A',
    description: 'Programme complet pour la filière Mathématiques A avec tous les chapitres essentiels pour réussir le baccalauréat',
    href: '/secondary/class3/math-a',
    action: 'Accéder'
  },
  {
    title: 'Mathématiques B',
    description: 'Ressources complètes pour la filière Mathématiques B avec cours, exercices et sujets d\'examen corrigés',
    href: '/secondary/class3/math-b',
    action: 'Accéder'
  },
  {
    title: 'Sciences Physiques et SVT',
    description: 'Mathématiques appliquées pour les élèves de Sciences Physiques et Sciences de la Vie et de la Terre',
    href: '/secondary/class3/pc-svt',
    action: 'Accéder'
  },
  {
    title: 'Lettres',
    description: 'Programme de mathématiques adapté aux filières littéraires avec applications pratiques',
    href: '/secondary/class3/lettres',
    action: 'Accéder'
  },
  {
    title: 'Économie',
    description: 'Mathématiques appliquées à l\'économie avec modélisation et résolution de problèmes économiques',
    href: '/secondary/class3/ECO',
    action: 'Accéder'
  }
];

export default function SecondBac() {
  return (
    <ClassTemplate
      title="2ème année du Baccalauréat"
      description="Choisissez votre filière pour accéder aux ressources"
      objectives="Préparez-vous intensivement au baccalauréat avec nos ressources complètes. Maîtrisez tous les chapitres et réussissez votre examen avec confiance."
      sections={sections}
      curriculum={curriculum}
      stats={stats}
      colorScheme="blue"
    />
  );
} 