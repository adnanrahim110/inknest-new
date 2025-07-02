import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  sec2_img,
  services_gw_banner,
  services_icons_1,
  services_icons_2,
  services_icons_3,
  services_icons_4,
} from "../assets";
import SecTwo from "../components/home/SecTwo";
import Hero from "../components/services/Hero";
import Sec3 from "../components/services/SEc3";

const card = [
  {
    title: "Developmental Editing",
    text: "Our professional editors will critique all aspects of your novel, including its structure, storyline, characters, pacing, and narrative flow. Together, we can mold your tale into something that succeeds beyond your wildest expectations.",
    img: services_icons_1,
  },
  {
    title: "Copy Editing",
    text: "Our expert copyeditors pay special attention to polishing the text's mechanics. They ensure that the style, tense, and formatting are consistent and rectify grammatical, punctuation, or spelling issues. The copyediting process makes your writing error-free, concise, and easy to understand.",
    img: services_icons_2,
  },
  {
    title: "Line Editing",
    text: "Richmond Publishers professional line editors will scrutinize your work to minor details. They make your text more readable and coherent by fixing sentence structure and word choice. Line editing improves your work, making it easier to read and more interesting to digest.",
    img: services_icons_3,
  },
  {
    title: "Proofreading",
    text: "Your text will receive a final polish from our proofreaders before being released to the public. They give your book a thorough once-over to catch any last-minute typos or formatting issues before it reaches your readers' hands.",
    img: services_icons_4,
  },
];

const Service = ({ service, serviceId }) => {
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>title - Ink Nest Publishing</title>
      </Helmet>
      <Hero
        title="lorem ipsum dolor sit amet consectetur"
        text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae? Quisquam, quae?"
        points={[
          "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ]}
        bg={services_gw_banner}
      />
      <SecTwo
        title="lorem ipsum dolor sit amet consectetur"
        text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae? Quisquam, quae? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae? Quisquam, quae? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae? Quisquam, quae? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae? Quisquam, quae?"
        img={sec2_img}
      />
      <Sec3
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aspernatur sed dignissimos, quos delectus perspiciatis a necessitatibus reprehenderit reiciendis corporis expedita asperiores aut impedit molestias hic enim provident voluptatem incidunt?"
        card={card}
      />
    </>
  );
};

export default Service;
