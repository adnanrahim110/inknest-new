import { AnimatePresence } from "motion/react";
import React, { lazy, Suspense, useState } from "react";
import OpenAtTop from "./components/common/OpenAtTop";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Popup from "./components/layouts/Popup";
import AppRoutes from "./routes/routes";
const ToastContainer = lazy(() =>
  import("react-toastify").then((mod) => ({ default: mod.ToastContainer }))
);

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <>
      <Header />

      <AppRoutes />

      <AnimatePresence>
        {isPopupOpen && <Popup closePopup={() => setIsPopupOpen(false)} />}
      </AnimatePresence>

      <Footer />

      <Suspense fallback={null}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Suspense>

      <ScrollToTop />
      <OpenAtTop />
    </>
  );
};

export default App;
