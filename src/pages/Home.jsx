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
        title="A Space Where Authors Grow"
        text="Ink Nest Publishing welcomes writers from all genres and stages. Whether it’s ghostwriting, editing, formatting, or marketing, we offer clear, well-defined services and openly communicate what we do and what we don’t. We do work hard to help your story get the attention it deserves. Our team is here to support your efforts with respect, ethics, and creativity."
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
