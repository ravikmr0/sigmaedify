import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MockTestList from "./components/mock-tests/MockTestList";
import MockTestPage from "./components/mock-tests/MockTestPage";
import SpecificTest from "./components/mock-tests/SpecificTest";

import AboutUs from "./components/pages/AboutUs";
import Courses from "./components/pages/Courses";
import SuccessStories from "./components/pages/SuccessStories";
import LatestNews from "./components/pages/LatestNews";
import CareerGuide from "./components/pages/CareerGuide";
import HelpCenter from "./components/pages/HelpCenter";
import TermsOfService from "./components/pages/TermsOfService";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import CookiePolicy from "./components/pages/CookiePolicy";
import RefundPolicy from "./components/pages/RefundPolicy";
import NotesLibrary from "./components/pages/NotesLibrary";
import routes from "tempo-routes";

function App() {
  const tempoRoutes = import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;
  
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="min-h-screen">
        {tempoRoutes}
        {!tempoRoutes && <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-tests" element={<MockTestList />} />
          <Route path="/mock-test/:testId" element={<MockTestPage />} />
          <Route path="/mock-test/specific" element={<SpecificTest />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/notes-library" element={<NotesLibrary />} />
        </Routes>}
      </div>
    </Suspense>
  );
}

export default App;
