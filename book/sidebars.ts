import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    // Top-level intro
    'intro',
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      items: [
        'physical-ai/physical-ai-basics',
        'physical-ai/humanoid-robots',
        'physical-ai/ros2-and-software-stack',
        'physical-ai/simulation-and-digital-twins',
        'physical-ai/lab-setup-and-hardware',
        'physical-ai/projects-and-skills',
      ],
    },
  ],
};

export default sidebars;
