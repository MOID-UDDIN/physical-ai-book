import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type ChapterItem = {
  title: string;
  slug: string;
  tag: string;
  description: ReactNode;
};

const ChapterList: ChapterItem[] = [
  {
    tag: 'Chapter 1',
    title: 'Physical AI Basics',
    slug: 'physical-ai/physical-ai-basics',
    description: (
      <>
        Physical AI operates in the real world using sensing, reasoning, and
        action. Unlike digital AI, it interacts with the physical environment
        through continuous perception and control loops.
      </>
    ),
  },
  {
    tag: 'Chapter 2',
    title: 'Humanoid Robots',
    slug: 'physical-ai/humanoid-robots',
    description: (
      <>
        Humanoid robots are designed to function in human-centered
        environments. They combine sensors, actuators, balance systems, and
        learning models to perform human-like tasks.
      </>
    ),
  },
  {
    tag: 'Chapter 3',
    title: 'ROS 2 and the Software Stack',
    slug: 'physical-ai/ros2-and-software-stack',
    description: (
      <>
        ROS 2 is the communication backbone for modern robotics, connecting
        perception, planning, and control through nodes, topics, and modular
        interfaces.
      </>
    ),
  },
  {
    tag: 'Chapter 4',
    title: 'Simulation and Digital Twins',
    slug: 'physical-ai/simulation-and-digital-twins',
    description: (
      <>
        Simulation and digital twins allow safe, fast experimentation before
        deploying to real robots. They reduce risk and accelerate development.
      </>
    ),
  },
  {
    tag: 'Chapter 5',
    title: 'Lab Setup and Hardware',
    slug: 'physical-ai/lab-setup-and-hardware',
    description: (
      <>
        Building a Physical AI lab requires compute hardware, sensors, robot
        platforms, networking, cloud access, and essential safety systems for
        experimentation.
      </>
    ),
  },
  {
    tag: 'Chapter 6',
    title: 'Projects and Skills',
    slug: 'physical-ai/projects-and-skills',
    description: (
      <>
        Hands-on projects help students build real robotics skills—from
        perception pipelines to control behaviors and end-to-end robot tasks.
      </>
    ),
  },
];

function ChapterCard({title, slug, tag, description}: ChapterItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card margin-bottom--lg">
        <div className="card__header">
          <p className="margin-bottom--xs text--primary text--bold">{tag}</p>
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--primary button--sm"
            to={`/docs/${slug}`}>
            Read full chapter →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="margin-bottom--lg text--center">
          <Heading as="h2">Start Reading the Textbook</Heading>
          <p>
            Learn Physical AI & Humanoid Robotics step by step — from core
            foundations to hands-on projects.
          </p>
        </div>
        <div className="row">
          {ChapterList.map((chapter) => (
            <ChapterCard key={chapter.slug} {...chapter} />
          ))}
        </div>
      </div>
    </section>
  );
}
