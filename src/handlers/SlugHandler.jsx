import React, { lazy } from "react";
import { Navigate, useParams } from "react-router-dom";
import { services, terms } from "../constants";
const Terms = lazy(() => import("../pages/Terms"));
const Service = lazy(() => import("../pages/Service"));

const validServiceSlugs = services.map((svc) =>
  svc.link.startsWith("/") ? svc.link.slice(1) : svc.link
);

const validTermsSlugs = terms.map((term) =>
  term.url.startsWith("/") ? term.url.slice(1) : term.url
);

const SlugHandler = () => {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  if (validServiceSlugs.includes(slug)) {
    const matchedService = services.find((svc) => svc.link.slice(1) === slug);

    return (
      <Service
        key={`service-${slug}`}
        serviceId={slug}
        service={matchedService}
      />
    );
  }

  if (validTermsSlugs.includes(slug)) {
    const matchedTerm = terms.find((term) => term.url.slice(1) === slug);
    return <Terms key={`term-${slug}`} termId={slug} term={matchedTerm} />;
  }

  return <Navigate to="/404" replace />;
};

export default SlugHandler;
