import type { GetStaticProps, NextPage } from "next";

import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import { GET_ALL_SKILLS, GET_ALL_PROJECTS } from "../graphql/queries";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MyProjects from "../components/MyProjects";
import Skills from "../components/Skills";
import Who from "../components/Who";
import { allDataType } from "../shared/types";
import { client } from "../graphql/client";
import { useRef } from "react";

interface HomeProps {
  skills: allDataType;
  projects: allDataType;
}

const Home: NextPage<HomeProps> = ({ skills,projects }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />

      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills skills={skills.skills} />
        <MyProjects projects={projects.projects} />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const skills = await client.request(GET_ALL_SKILLS);
  const projects = await client.request(GET_ALL_PROJECTS);
  return {
    props: {
      skills,
      projects
    },
    revalidate: 3600,
  };
};
