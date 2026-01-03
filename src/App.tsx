import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load all route components
const MockTestList = lazy(() => import("./components/mock-tests/MockTestList"));
const MockTestPage = lazy(() => import("./components/mock-tests/MockTestPage"));
const SpecificTest = lazy(() => import("./components/mock-tests/SpecificTest"));
const PerformanceDashboard = lazy(() => import("./components/mock-tests/PerformanceDashboard"));
const TutorialHome = lazy(() => import("./components/tutorials/TutorialHome"));
const TutorialExample = lazy(() => import("./components/tutorials/TutorialExample"));
const HistoryTutorial = lazy(() => import("./components/tutorials/HistoryTutorial"));
const EconomyTutorial = lazy(() => import("./components/tutorials/EconomyTutorial"));
const AncientHistoryTutorial = lazy(() => import("./components/tutorials/AncientHistoryTutorial"));
const MedievalHistoryTutorial = lazy(() => import("./components/tutorials/MedievalHistoryTutorial"));
const FreedomStruggleTutorial = lazy(() => import("./components/tutorials/FreedomStruggleTutorial"));
const GovernanceTutorial = lazy(() => import("./components/tutorials/GovernanceTutorial"));
const InternationalRelationsTutorial = lazy(() => import("./components/tutorials/InternationalRelationsTutorial"));
const EconomicBasicsTutorial = lazy(() => import("./components/tutorials/EconomicBasicsTutorial"));
const BudgetTutorial = lazy(() => import("./components/tutorials/BudgetTutorial"));
const BankingTutorial = lazy(() => import("./components/tutorials/BankingTutorial"));
const CategoryPage = lazy(() => import("./components/tutorials/CategoryPage"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const Courses = lazy(() => import("./components/pages/Courses"));
const SuccessStories = lazy(() => import("./components/pages/SuccessStories"));
const LatestNews = lazy(() => import("./components/pages/LatestNews"));
const CareerGuide = lazy(() => import("./components/pages/CareerGuide"));
const HelpCenter = lazy(() => import("./components/pages/HelpCenter"));
const TermsOfService = lazy(() => import("./components/pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./components/pages/CookiePolicy"));
const RefundPolicy = lazy(() => import("./components/pages/RefundPolicy"));
const NotesLibrary = lazy(() => import("./components/pages/NotesLibrary"));

function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          </div>
          <p className="text-lg font-medium text-muted-foreground animate-pulse">Loading amazing content...</p>
        </div>
      </div>
    }>
      <div className="min-h-screen">
        {import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-tests" element={<MockTestList />} />
          <Route path="/mock-test/:testId" element={<MockTestPage />} />
          <Route path="/mock-test/specific" element={<SpecificTest />} />
          <Route path="/performance-dashboard" element={<PerformanceDashboard />} />
          <Route path="/tutorials" element={<TutorialHome />} />
          <Route path="/tutorials/:categoryId" element={<CategoryPage />} />
          <Route
            path="/tutorials/politics/indian-constitution"
            element={<TutorialExample />}
          />
          <Route
            path="/tutorials/history/modern-history"
            element={<HistoryTutorial />}
          />
          <Route
            path="/tutorials/history/ancient-history"
            element={<AncientHistoryTutorial />}
          />
          <Route
            path="/tutorials/history/medieval-history"
            element={<MedievalHistoryTutorial />}
          />
          <Route
            path="/tutorials/history/freedom-struggle"
            element={<FreedomStruggleTutorial />}
          />
          <Route
            path="/tutorials/politics/governance"
            element={<GovernanceTutorial />}
          />
          <Route
            path="/tutorials/politics/international-relations"
            element={<InternationalRelationsTutorial />}
          />
          <Route
            path="/tutorials/economy/indian-economy"
            element={<EconomyTutorial />}
          />
          <Route
            path="/tutorials/economy/basics"
            element={<EconomicBasicsTutorial />}
          />
          <Route
            path="/tutorials/economy/budget"
            element={<BudgetTutorial />}
          />
          <Route
            path="/tutorials/economy/banking"
            element={<BankingTutorial />}
          />
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
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
