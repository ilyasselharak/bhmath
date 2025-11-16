import ClassTemplate from '@/components/ClassTemplate';

export const metadata = {
  title: 'Première année du Baccalauréat | BHMath',
  description: 'Ressources mathématiques pour la première année du Baccalauréat',
};

const stats = [
  { value: '22+', label: 'Chapitres' },
  { value: '500+', label: 'Exercices' },
  { value: '120+', label: 'Devoirs' },
  { value: '4', label: 'Filières' }
];

const curriculum = [
  {
    title: 'Analyse',
    description: 'Fonctions, limites, continuité et dérivées'
  },
  {
    title: 'Algèbre',
    description: 'Nombres complexes, équations et systèmes'
  },
  {
    title: 'Géométrie',
    description: 'Géométrie analytique et transformations'
  },
  {
    title: 'Probabilités',
    description: 'Probabilités conditionnelles et variables aléatoires'
  },
  {
    title: 'Statistiques',
    description: 'Statistiques descriptives et inférentielles'
  },
  {
    title: 'Suites numériques',
    description: 'Suites arithmétiques, géométriques et limites'
  }
];

const sections = [
  {
    title: 'Sciences Mathématiques',
    description: 'Programme complet pour la filière Sciences Mathématiques avec cours approfondis, exercices et devoirs corrigés',
    href: '/secondary/class2/sciences-math',
    action: 'Accéder'
  },
  {
    title: 'Sciences Physiques et SVT',
    description: 'Ressources mathématiques adaptées pour les élèves de Sciences Physiques et Sciences de la Vie et de la Terre',
    href: '/secondary/class2/pc-svt',
    action: 'Accéder'
  },
  {
    title: 'Lettres',
    description: 'Programme de mathématiques appliquées spécialement conçu pour les filières littéraires',
    href: '/secondary/class2/lettres',
    action: 'Accéder'
  },
  {
    title: 'Économie',
    description: 'Mathématiques appliquées à l\'économie avec cours pratiques et exercices concrets',
    href: '/secondary/class2/economie',
    action: 'Accéder'
  }
];

export default function FirstBac() {
  return (
    <ClassTemplate
      title="Première année du Baccalauréat"
      description="Choisissez votre filière pour accéder aux ressources"
      objectives="Maîtrisez les concepts fondamentaux de la première année du baccalauréat. Préparez-vous efficacement pour la 2ème année et développez votre raisonnement mathématique."
      sections={sections}
      curriculum={curriculum}
      stats={stats}
      colorScheme="blue"
    />
  );
} 