import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SlugHandler from "../handlers/SlugHandler";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Thankyou = lazy(() => import("../pages/Thankyou"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path=":slug" element={<SlugHandler />} />
        <Route path=":slug/:subslug" element={<SlugHandler />} />
        <Route path="/thankyou" element={<Thankyou />} />

        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
