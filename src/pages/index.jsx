import React from "react";
import Layouts from "@layouts/Layouts";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";

const Home1 = () => {
  return (
    <Layouts>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}