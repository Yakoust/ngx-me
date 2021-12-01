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
    path: 'airbus',
    rank: 3,
    title: 'Airbus Defence and Space',
    category: 'Experiences',
    shortDescription: 'Airbus Defence and Space - Webfactory',
    withSummary: true,
    withLinks: true,
    tags: [ 'Angular', 'NgRx (redux)', 'OpenLayers', 'Gitlab CI' ],
    fileName: 'experiences/airbus.md'
  },
  {
    path: 'gamba-acoustique',
    rank: 7,
    title: 'Gamba acoustique',
    category: 'Experiences',
    shortDescription: 'Gamba acoustique',
    withSummary: true,
    withLinks: true,
    tags: [ 'MFC', 'C++', 'C#' ],
    fileName: 'experiences/gamba-acoustique.md'
  },
  {
    path: 'geosys',
    rank: 5,
    title: 'Geosys',
    category: 'Experiences',
    shortDescription: 'Geosys - Smart Farming',
    withSummary: true,
    withLinks: true,
    tags: [ 'C#', '.NET', 'BigData' ],
    fileName: 'experiences/geosys.md'
  },
  {
    path: 'neo-soft-2008',
    rank: 6,
    title: 'Neo Soft',
    category: 'Experiences',
    shortDescription: 'Neo Soft (2008 -> 20014)',
    withSummary: true,
    withLinks: true,
    tags: [ 'c++', 'java', 'C#', '.NET', 'Python', 'Sharepoint', 'Php' ],
    fileName: 'experiences/neo-soft-2008.md'
  },
  {
    path: 'neo-soft-2017',
    rank: 4,
    title: 'Neo Soft',
    category: 'Experiences',
    shortDescription: 'Neo Soft',
    withSummary: true,
    withLinks: true,
    tags: [
      'Angular',
      'NgRx',
      'OpenLayers',
      'Gitlab',
      'Spring',
      'MongoDb',
      'Iot'
    ],
    fileName: 'experiences/neo-soft-2017.md'
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