import React from "react";
import { Helmet } from "react-helmet-async";
import { sec2_img } from "../assets";
import Sec1 from "../components/home/Sec1";
import Sec3 from "../components/home/Sec3";
import SecTwo from "../components/home/SecTwo";
import Cta from "../components/layouts/Cta";
import Cta2 from "../components/layouts/Cta2";
import Faqs from "../components/layouts/Faqs";
import Form from "../components/layouts/Form";
import PortfolioSec from "../components/layouts/PortfolioSec";
import Process from "../components/layouts/Process";
import Reviews from "../components/layouts/Reviews";
import ServicesSec from "../components/layouts/ServicesSec";
import Stories from "../components/layouts/Stories";
import Hero from "../components/ui/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Ink Nest Publishing</title>
      </Helmet>
      <Hero />
      <Sec1 />
      <SecTwo
        title="Your book. Your voice. Published professionally With Ink Nest Publishing"
        text={[
          "Ink Nest Publishing makes book publishing efficient, professional, and author-focused.Publishing a book on Amazon can be complex, but with the right guidance, it becomes achievable. Ink Nest Publishing provides end-to-end support, including manuscript editing, professional formatting, custom book cover design, and complete Amazon KDP publishing services.",
          "Whether it's a novel, nonfiction title, children’s book, or memoir, each manuscript receives the same attention to quality and market readiness. Ink Nest Publishing focuses on making your creative work accessible, polished, and ready for readers worldwide.",
          "Publishing doesn’t have to be overwhelming, Ink Nest Publishing provides the structure, expertise, and support you need to succeed.",
        ]}
        img={sec2_img}
      />
      <Sec3 />
      <PortfolioSec />
      <ServicesSec />
      <Stories />
      <Cta />
      <Process />
      <Reviews />
      <Cta2 />
      <Faqs />
      <Form />
    </>
  );
};

export default Home;
