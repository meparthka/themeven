import type { NextPage } from 'next'
import Link from 'next/link';
import Header from '../components/header';
import HomeHeader from '../components/homeheader';
import FeaturedPost from '../components/featuredpost';
import TechPost from '../components/technologypost';
import Projects from '../components/projects';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeHeader />
      <FeaturedPost />
      <TechPost />
      <Projects />
    </>
  )
}

export default Home;
