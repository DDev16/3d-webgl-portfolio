import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Dillon Devera',
  subTitle: 'Blockchain Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/stars.png',
    dencity: 900,
  },
  navTitle: 'Welcome to my Portal ',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'About Me',
      infos: [
        "I'm a craftsman and a lifelong learner, captivated by the exploration of the complexities of our world and the intricate mechanisms of how things operate.",
        "My venture into software development unfolded in the dynamic environment of a crypto trading group, an unexpected journey that led me to the co-founding of an innovative NFT project.",
        "My journey as a blockchain developer began in 2020. Over the past three years, I've collaborated with a multitude of companies and non-profit organizations, contributing to the development of top-notch blockchain products.",
        "Possessing a diverse array of skills, I've reached a level of proficiency in numerous areas, a testament to my unwavering commitment and ceaseless quest for knowledge."
    ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Dapps',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to see live Dapps.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Smart Contracts',
      footer: 'Click the icon above to view!',
      
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/smartcontract.png',
            websiteURL:
              'https://github.com/DDev16/Smart-Contracts',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/FlareFire.jpg',
            websiteURL: 'https://marketv4.vercel.app/',
          },
          {
            url: 'websites-preview/snow-hero.png',
            websiteURL: 'https://powtom48.itch.io/snow-the-hero',
          },
          {
            url: 'websites-preview/minecraft-in-js.png',
            websiteURL:
              'https://www.youtube.com/watch?v=yOUQquusyiY&t=123s&ab_channel=tomugon',
          },
          {
            url: 'websites-preview/fish-chopter.png',
            websiteURL: 'https://powtom48.itch.io/fishcopter',
          },
          {
            url: 'websites-preview/odd-clowns.png',
            websiteURL: 'https://oddclowns.com/',
          },
          {
            url: 'websites-preview/island-ai.png',
            websiteURL: 'https://www.instagram.com/island.ai/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/TheHeartofG0ld',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/devd16/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/DevD16',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:DeveraDillon@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
