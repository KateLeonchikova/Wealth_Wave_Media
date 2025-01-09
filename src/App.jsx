import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { Privacy } from "./components/Privacy/Privacy";
import { Footer } from "./components/Footer/Footer";
import { AgeVerification } from "./components/AgeVerification/AgeVerification";
import { CookieBanner } from "./components/CookieBanner/CookieBanner";
import { AppContext } from "./components/Provider/AppContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(null);
  const [isShowAgeModal, setIsShowAgeModal] = useState(true);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const ageVerified = Cookies.get("isAgeVerified");

    if (ageVerified) {
      setIsAgeVerified(ageVerified === "true");
      setIsShowAgeModal(false);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && isAgeVerified !== null) {
      const cookieConsent = Cookies.get("cookieConsent");

      if (!cookieConsent) {
        setIsCookieBannerVisible(true);
      }
    }
  }, [isAgeVerified, isLoading, location]);

  const handleAgeVerificationClose = () => {
    setIsShowAgeModal(false);
  };

  const handleCookieAccept = () => {
    setIsCookieBannerVisible(false);
  };

  const handleCookieDecline = () => {
    setIsCookieBannerVisible(false);
  };

  if (isLoading) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{ isAgeVerified, isCookieBannerVisible, setIsCookieBannerVisible }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />

      {isShowAgeModal && (
        <AgeVerification
          onVerify={(isVerified) => {
            setIsAgeVerified(isVerified);
            handleAgeVerificationClose();
          }}
        />
      )}

      {isAgeVerified === false && <Navigate to="/privacy" replace />}

      {isCookieBannerVisible && (
        <CookieBanner
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
        />
      )}
    </AppContext.Provider>
  );
}

export default App;
