import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { sec2_img, services_gw_banner, services_ill_faq } from "../assets";
import GwSlider from "../components/home/Sec3";
import SecTwo from "../components/home/SecTwo";
import Cta2 from "../components/layouts/Cta2";
import Faqs from "../components/layouts/Faqs";
import Form from "../components/layouts/Form";
import PortfolioSec from "../components/layouts/PortfolioSec";
import Process from "../components/layouts/Process";
import Reviews from "../components/layouts/Reviews";
import Hero from "../components/services/Hero";
import PortfolioSecService from "../components/services/PortfolioSec";
import Sec2New from "../components/services/Sec2New";
import Sec3 from "../components/services/Sec3";
import Sec3Cards from "../components/services/Sec3Cards";
import Sec5 from "../components/services/Sec5";

const Service = ({ service, serviceId }) => {
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>{service.title} - Ink Nest Publishing</title>
      </Helmet>
      <Hero
        title={service.hero.title}
        text={service.hero.text}
        points={service.hero.points}
        bg={services_gw_banner}
        title_second={service.hero.title_second}
        text_second={service.hero.text_second}
        quote={service.hero.quote}
      />
      {service.secTwo && (
        <SecTwo
          title={service.secTwo.title}
          text={service.secTwo.text}
          img={service.secTwo.img}
        />
      )}
      {service.sec2_new && (
        <Sec2New title={service.sec2_new.title} text={service.sec2_new.text} />
      )}
      {service.sec3_cards && (
        <Sec3Cards
          title={service.sec3_cards.title}
          highlight={service.sec3_cards.highlight}
          text={service.sec3_cards.text}
          cards={service.sec3_cards.cards}
        />
      )}
      {service.homeSec3 && <GwSlider />}
      {service.sec3 && (
        <Sec3
          title={service.sec3.title}
          highlight={service.sec3.highlight}
          text={service.sec3.text}
          img={service.sec3.img}
          card={service.sec3.cards}
        />
      )}
      {!service.homeSec3 && service.portfolio && (
        <PortfolioSecService portfolio={service.portfolio} />
      )}
      {service.default_portfolio && (
        <PortfolioSec step={service.default_portfolio} />
      )}
      {service.sec5 && (
        <Sec5
          title={service.sec5.title}
          text={service.sec5.text}
          cards={service.sec5.cards}
        />
      )}
      <Cta2 img={service.cta && service.cta.img} />
      {service.homeSec3 && service.portfolio && (
        <PortfolioSecService portfolio={service.portfolio} />
      )}
      <Process process={service.sec6} />
      <Reviews />
      <Faqs questionare={service.service_faq} img={services_ill_faq} />
      <Form />
    </>
  );
};

export default Service;
