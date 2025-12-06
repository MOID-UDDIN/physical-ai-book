import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A practical textbook for the Hackathon',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', 
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI Textbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Physical AI Basics', to: '/docs/physical-ai/physical-ai-basics' },
            { label: 'Humanoid Robots', to: '/docs/physical-ai/humanoid-robots' },
          ],
        },
        {
          title: 'More Topics',
          items: [
            { label: 'ROS 2 & Software Stack', to: '/docs/physical-ai/ros2-and-software-stack' },
            { label: 'Simulation & Digital Twins', to: '/docs/physical-ai/simulation-and-digital-twins' },
            { label: 'Lab Setup & Hardware', to: '/docs/physical-ai/lab-setup-and-hardware' },
            { label: 'Projects & Skills', to: '/docs/physical-ai/projects-and-skills' },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub Repo',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Made by Moid Uddin. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
