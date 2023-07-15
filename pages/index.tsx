import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Education = dynamic(() => import('../containers/Education'));
const Projects = dynamic(() => import('../containers/Projects'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { openSource } from '../portfolio';
import { GithubUserType } from '../types';

export default function Home({
  githubProfileData,
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Projects />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
