import {PageMeta} from './page-meta';

export const pagesMetas: PageMeta[] = [
  {
    path: 'contact',
    rank: 5,
    title: 'Me contacter',
    category: 'contact',
    shortDescription: 'Me contacter',
    withSummary: false,
    withLinks: false,
    tags: [ 'contact' ],
    fileName: 'contact.md'
  },
  {
    path: 'gamba-acoustique',
    rank: 3,
    title: 'Gamba acoustique',
    category: 'Experiences',
    shortDescription: 'Gamba acoustique',
    withSummary: true,
    withLinks: true,
    tags: [ 'MFC', 'C++', 'C#' ],
    fileName: 'experiences/gamba-acoustique.md'
  },
  {
    path: 'neo-soft',
    rank: 4,
    title: 'Neo Soft',
    category: 'Experiences',
    shortDescription: 'Neo Soft',
    withSummary: true,
    withLinks: true,
    tags: [ 'MFC', 'C++', 'C#' ],
    fileName: 'experiences/neo-soft.md'
  },
  {
    path: 'formations',
    rank: 2,
    title: 'Formation',
    category: 'Formation',
    shortDescription: 'Mon parcours',
    withSummary: false,
    withLinks: false,
    tags: [ 'formation' ],
    fileName: 'formations.md'
  },
  {
    path: 'home',
    rank: 1,
    title: 'A propos de moi',
    category: 'Accueil',
    shortDescription: 'Présentation',
    withSummary: false,
    withLinks: false,
    tags: [ 'accueil' ],
    fileName: 'home.md'
  }
];